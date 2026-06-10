/**
 * Strip markdown formatting and return plain text.
 *
 * Handles headings, bold, italic, inline code, code blocks,
 * links, images, blockquotes, and unordered list markers.
 */
export function stripMarkdown(input: string): string {
  let text = input;

  // Fenced code blocks: keep content, drop the fences
  text = text.replace(/^```[^\n]*\n([\s\S]*?)^```$/gm, "$1");

  // Images: ![alt](url) -> alt
  text = text.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1");

  // Links: [text](url) -> text
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");

  // Headings
  text = text.replace(/^#{1,6}\s+/gm, "");

  // Bold + italic: ***text*** or ___text___
  text = text.replace(/(\*{3}|_{3})(.+?)\1/g, "$2");

  // Bold: **text** or __text__
  text = text.replace(/(\*{2}|_{2})(.+?)\1/g, "$2");

  // Italic: *text* or _text_ (not inside words)
  text = text.replace(/(?<!\w)(\*|_)(.+?)\1(?!\w)/g, "$2");

  // Strikethrough: ~~text~~
  text = text.replace(/~~(.+?)~~/g, "$1");

  // Inline code
  text = text.replace(/`([^`]+)`/g, "$1");

  // Blockquotes
  text = text.replace(/^>\s?/gm, "");

  // Unordered list markers
  text = text.replace(/^[\t ]*[-*+]\s+/gm, "");

  // Horizontal rules
  text = text.replace(/^[-*_]{3,}$/gm, "");

  // Collapse multiple blank lines
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim() + "\n";
}
