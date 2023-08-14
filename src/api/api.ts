class Api {
  async getFlag() {
    try {
      const response = await fetch(
        "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/637265"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.text();
    } catch (error) {
      throw error;
    }
  }
}

export const api = new Api();
