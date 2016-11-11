import 'reflect-metadata';
import {Kernel} from "inversify";
import {UserService} from "../services/UserService";
import {ShipmentService} from '../services/ShipmentService';
import {IShipmentService} from '../services/IShipmentService'
import {IUserService} from "../services/IUserService";

var kernel = new Kernel();
kernel.bind<IUserService>('IUserService').to(UserService);
kernel.bind<IShipmentService>('IShipmentService').to(ShipmentService);

export = kernel;