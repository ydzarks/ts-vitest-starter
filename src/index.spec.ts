import { describe, expect, it } from 'vitest'
import { add } from '.'

describe('tEST', () => {
  it('a + b', () => {
    expect(add(3, 4)).toBe(7)
  })
})
