import { it, expect } from 'vitest'


it('expect.soft doesnt stops execution on failure', () => {
    const content = {
         data: 'This is some content', 
         timestamp: new Date().toISOString() // This will change every run
    }
    
    console.log('Asserting object with expect.soft, should fail on timestamp...')
    expect.soft(content).toMatchObject({ data: 'This is some content', timestamp: '2023-01-01T00:00:00.000Z' })
    // continues here
    console.log(`Should log and does`)
    expect.soft(true).toBe(false)
})

it('expect.soft with toMatchSnapshot stops execution on failure', () => {
    const content = {
         data: 'This is some content', 
         timestamp: new Date().toISOString() // This will change every run
    }
    
    console.log('Asserting snapshots with expect.soft, should fail on timestamp...')
    // These should fail but with soft assertions, execution should continue
    // However, toMatchSnapshot does not work properly with expect.soft
    expect.soft(content).toMatchSnapshot('content-v1')
    // Doesnt continue here
    console.log(`Should log but doesn't due to snapshot issue`)
    // This assertion should still run even if the snapshots above fail but doesn't
    expect.soft(true).toBe(false)
})