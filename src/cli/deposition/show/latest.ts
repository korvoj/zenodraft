import { deposition_show_latest } from '../../../lib/deposition/show/latest'
import { helpers_get_access_token_from_environment } from '../../../lib/helpers/get-access-token-from-environment'
import * as commander from 'commander'



export const deposition_show_latest_command = () => {
    return new commander.Command()
        .name('latest')
        .arguments('<collection_id>')
        .description('get the deposition id of the latest version in the collection with id <collection_id>', {
            collection_id: 'id of the collection whose latest version id we want to retrieve'
        })
        .action(async (collection_id, opts, self) => {
            const { sandbox, verbose } = self.parent.parent.parent.opts()
            try {
                const access_token = helpers_get_access_token_from_environment(sandbox)
                const latest_id = await deposition_show_latest(access_token, sandbox, collection_id, verbose)
                console.log(latest_id)
            } catch (e) {
                console.log('')
                console.error(e.message)
            }
        })
}