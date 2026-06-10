export function greet(name: string): string {
  return name.trim() ? `Hello, ${name.trim()}!` : "Hello, world!";
}
