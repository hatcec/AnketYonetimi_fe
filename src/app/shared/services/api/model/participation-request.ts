/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { User } from './user';


export interface ParticipationRequest { 
    id?: number;
    user?: User;
    survey?: number;
    answers?: Array<string>;
    role?: ParticipationRequest.RoleEnum;
}
export namespace ParticipationRequest {
    export type RoleEnum = 'USER' | 'ADMIN';
    export const RoleEnum = {
        User: 'USER' as RoleEnum,
        Admin: 'ADMIN' as RoleEnum
    };
}


