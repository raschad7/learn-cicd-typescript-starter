import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("successfully extracts the API key", () => {
    const headers = {
      authorization: "ApiKey my-super-secret-key",
    };

    const key = getAPIKey(headers);
    expect(key).toBe("my-super-secret-key");
  });

  test("returns null if authorization header is missing", () => {
    const headers = {}; // Empty headers

    const key = getAPIKey(headers);
    expect(key).toBe(null);
  });

  test("returns null if authorization header is malformed", () => {
    const headers = {
      authorization: "Bearer my-super-secret-key", // Wrong prefix
    };

    const key = getAPIKey(headers);
    expect(key).toBe(null);
  });
});
