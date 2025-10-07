import { it, expect } from 'vitest'

it('expect.soft doesnt stops execution on failure', () => {
    console.log('Asserting object with expect.soft, should fail on timestamp...')
    expect.soft({foo:"bar"}).toMatchObject({foo:"baz"})
    // continues here
    console.log(`Should log and does`)
    expect.soft(true).toBe(false)
})

it('expect.soft with toMatchSnapshot stops execution on failure', () => {    
    // These should fail but with soft assertions, execution should continue
    // However, toMatchSnapshot does not work properly with expect.soft
    expect.soft({time: new Date()}).toMatchSnapshot()
    // Doesnt continue here
    console.log(`Should log but doesn't`)
    // This assertion should still run even if the snapshots above fail but doesn't
    expect.soft(true).toBe(false)
})