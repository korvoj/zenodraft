import { test, expect } from '@jest/globals'
import { helpers_get_access_token_from_environment } from '../../src/helpers/get-access-token-from-environment'
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import { define_token } from '../test-helpers'



let temporary_directory: string

afterEach(() => {
    fs.rmdirSync(temporary_directory, { recursive: true })
})


beforeEach(() => {
    temporary_directory = fs.mkdtempSync(`${os.tmpdir()}${path.sep}zenodraft-testing.`)
    process.chdir(temporary_directory)
})



describe('zenodo sandbox access token tests', () => {

    const sandbox = true

    test('should throw if zenodo sandbox access token can\'t be determined', () => {
        const throwfun = () => {
            helpers_get_access_token_from_environment(sandbox)
        }
        expect(throwfun).toThrow()
        try {
            throwfun()
        } catch (e) {
            expect(e.message).toBe('Could not read ZENODO_SANDBOX_ACCESS_TOKEN from file named .env nor from environment variables.')
        }
    })

    test('should return zenodo sandbox access token from env file', () => {
        const token = 'faux_zenodo_sandbox_token'
        fs.writeFileSync('.env', `ZENODO_SANDBOX_ACCESS_TOKEN=${token}`, 'utf8')
        const actual = helpers_get_access_token_from_environment(sandbox)
        const expected = token
        expect(actual).toBe(expected)
    })

    test('should return zenodo sandbox access token from environment variable', () => {
        const token = 'faux_zenodo_sandbox_token'
        define_token(sandbox, token)
        const actual = helpers_get_access_token_from_environment(sandbox)
        const expected = token
        expect(actual).toBe(expected)
    })

})


describe('zenodo access token tests', () => {

    const sandbox = false

    test('should throw if zenodo access token can\'t be determined', () => {

        const throwfun = () => {
            helpers_get_access_token_from_environment(sandbox)
        }
        expect(throwfun).toThrow()
        try {
            throwfun()
        } catch (e) {
            expect(e.message).toEqual('Could not read ZENODO_ACCESS_TOKEN from file named .env nor from environment variables.')
        }
    })


    test('should return zenodo access token from env file', () => {
        const token = 'faux_zenodo_token'
        fs.writeFileSync('.env', `ZENODO_ACCESS_TOKEN=${token}`, 'utf8')
        const actual = helpers_get_access_token_from_environment(sandbox)
        const expected = token
        expect(actual).toBe(expected)
    })


    test('should return zenodo access token from environment variable', () => {
        const token = 'faux_zenodo_token'
        define_token(sandbox, token)
        const actual = helpers_get_access_token_from_environment(sandbox)
        const expected = token
        expect(actual).toBe(expected)
    })

})