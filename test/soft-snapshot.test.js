import { it, expect } from 'vitest'


it('expect.soft with toMatchSnapshot should work but might not', () => {
    // This test demonstrates the issue where expect.soft doesn't work properly with toMatchSnapshot
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