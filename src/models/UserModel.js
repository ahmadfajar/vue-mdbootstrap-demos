import { BsModel } from "vue-mdbootstrap";

export class UserModel extends BsModel {
    /**
     * Class constructor.
     */
    constructor() {
        super({
            id: null,
            fullName: null,
            email: null,
            education: null,
            address: null,
            country: null,
            state: null
        }, null, 'id');
    }

    /**
     * This is an example how to override REST configuration.
     *
     * @type {Object}
     */
    get restUrl() {
        return {
            'save': '/api/user/create',
            'fetch': '/api/user/{id}',
            'delete': '/api/user/delete/{id}',
            'update': '/api/user/update/{id}'
        }
    }
}
