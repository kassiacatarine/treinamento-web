export class Contact {
  constructor(
    firstName?: string,
    lastName?: string,
    email?: string,
    gender?: string,
    info?: new(
      avatar?: string,
      company?: string,
      address?: string,
      phone?: string,
      comments?: string
    ) => Object,
    isFavorite?: boolean,
    _id?: string
  ) { }
}
