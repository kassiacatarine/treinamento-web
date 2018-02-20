export class Contact {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    isFavorite: boolean;
    info: Informations;
}

export class Informations {
  avatar: string;
  company: string;
  address: string;
  phone: string;
  comments: string;
}
