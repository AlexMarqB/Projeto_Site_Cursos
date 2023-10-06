export type CoursesType = {
   id: string;
   name: string;
   ownerId: string;
   rating: number;
   numberOfRatings: number;
   photo: string;
   enrollmentsNumber: number;
   price: number;
};

export type ModulesType = {
   id: string;
   courseId: string;
   teacherId: string;
   name: string;
   description: string;
};

export enum EPriveleges {
   'student',
   'administrator',
}

export type UsersType = {
   id: string;
   email: string;
   username: string;
   password: string;
   firstName: string;
   lastName: string;
   photo: string;
   cpf: string;
   issued: Date;
   lastAccess: Date;
	privilege: EPriveleges;
};
