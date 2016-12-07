export class UserViewModel
{
    public constructor(
        public name:string,
        public password:string,
        public email:string,
        public fio:string,
        public isMail: boolean,
        public bithday: Date)
    {}    
}