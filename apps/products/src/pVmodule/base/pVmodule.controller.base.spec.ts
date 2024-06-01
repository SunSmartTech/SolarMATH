import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PVmoduleController } from "../pVmodule.controller";
import { PVmoduleService } from "../pVmodule.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cellQuantity: 42,
  id: "exampleId",
  maxPvVoltage: 42,
  model: "exampleModel",
  ratedPower: 42,
  temperatureHighC: 42,
  temperatureLowC: 42,
  unitPrice: 42.42,
};
const CREATE_RESULT = {
  cellQuantity: 42,
  id: "exampleId",
  maxPvVoltage: 42,
  model: "exampleModel",
  ratedPower: 42,
  temperatureHighC: 42,
  temperatureLowC: 42,
  unitPrice: 42.42,
};
const FIND_MANY_RESULT = [
  {
    cellQuantity: 42,
    id: "exampleId",
    maxPvVoltage: 42,
    model: "exampleModel",
    ratedPower: 42,
    temperatureHighC: 42,
    temperatureLowC: 42,
    unitPrice: 42.42,
  },
];
const FIND_ONE_RESULT = {
  cellQuantity: 42,
  id: "exampleId",
  maxPvVoltage: 42,
  model: "exampleModel",
  ratedPower: 42,
  temperatureHighC: 42,
  temperatureLowC: 42,
  unitPrice: 42.42,
};

const service = {
  createPVmodule() {
    return CREATE_RESULT;
  },
  pVmodules: () => FIND_MANY_RESULT,
  pVmodule: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("PVmodule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PVmoduleService,
          useValue: service,
        },
      ],
      controllers: [PVmoduleController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /pVmodules", async () => {
    await request(app.getHttpServer())
      .post("/pVmodules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /pVmodules", async () => {
    await request(app.getHttpServer())
      .get("/pVmodules")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /pVmodules/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pVmodules"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /pVmodules/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/pVmodules"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /pVmodules existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/pVmodules")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/pVmodules")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
