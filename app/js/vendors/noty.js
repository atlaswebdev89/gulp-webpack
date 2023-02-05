import Noty from 'noty'
import 'noty/src/noty.scss'

export const noty = () => {
    new Noty({
        type: 'success',
        text: 'Some notification text',
    }).show()
}
