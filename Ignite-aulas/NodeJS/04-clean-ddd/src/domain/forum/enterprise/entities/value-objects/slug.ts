export class Slug {
  public value: string

  private constructor(value: string) {
    this.value = value
  }

  static create(slug: string) {
    return new Slug(slug)
  }

  /**
   * Receives a string and normalize it as a slug
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text
   */

  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // remove espaços vazios
      .replace(/[^\w-]+/g, '') // remove caracteres que não sejam palavras
      .replace(/_/g, '-') // substitui underline para hífen
      .replace(/--+/g, '-') // dois hífen por um
      .replace(/-$/g, '') // remove hífen do final da string

    return new Slug(slugText)
  }
}
