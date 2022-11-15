import request from "supertest";
import { app } from "../../../../shared/http/server";

describe("Create Category", () => {
  it('should be able to list all Category', async () => {
    await request(app)
      .post("/category")
      .send({
        id: '123',
        name: "Category Supertest",
        created_at: new Date(),
        updated_at: new Date(),
      })

    const response = await request(app).get("/category");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toEqual("Category Supertest");
  })
})
