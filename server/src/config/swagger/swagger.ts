import { defaultMaxListeners } from "events";
import { Express, Response, Request } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "https",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/api/v1/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export function swaggerDocs(app: Express, port: number) {
  console.log("first");
  // Swagger page
  // app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  // // Docs in JSON format
  // app.get("docs.json", (req: Request, res: Response) => {
  //   res.setHeader("Content-Type", "application/json");
  //   res.send(swaggerSpec);
  // });
  // TODO: Log later with loger where docs are available
}
