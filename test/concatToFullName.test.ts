import { describe, it, expect } from "vitest";

import concatToFullName from "../src/utils/concatToFullName";

describe('Name concat, positive', ()=> {

    it('Name concat with first and last names both', ()=>{
        expect(concatToFullName({firstName:'Liam', lastName:'Garcia'})).toEqual('Liam Garcia')
    })

    it('Name concat without last name', ()=>{
        expect(concatToFullName({firstName: 'Liam'})).toEqual('Liam')
    })

    it('Name concat without first name', ()=>{
        expect(concatToFullName({lastName:'Garcia'})).toEqual('Garcia')
    })
})

describe('Name concat, negative', ()=> {

    it('Name concat without names', ()=>{
        expect(concatToFullName({})).toEqual('')
    })

})