
import {httpGet, controller, BaseHttpController, interfaces} from 'inversify-express-utils'

@controller('/')

export class AppController extends BaseHttpController implements interfaces.Controller {
    constructor() {
        super();
    }

    @httpGet("/")
    public index(): interfaces.IHttpActionResult {
        return this.json({ message: "service ok"})
    }
}