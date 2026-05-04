import { fetchAllBooks } from "@/data/FetchBooksData";

export async function GET() {
  try {
    const books = await fetchAllBooks();
    return Response.json(books);
  } catch (error) {
    return Response.json({ error: "Failed to fetch books" }, { status: 500 });
  }
}
