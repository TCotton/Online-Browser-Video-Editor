import React from 'react'
import fetchMock from 'fetch-mock'
import { render, waitFor, fireEvent } from '../../../test-utils'
import { enableFetchMocks } from 'jest-fetch-mock'
import { MessageComponent, dex } from '../MessageComponent'

enableFetchMocks()

describe('MessageComponent', () => {
  const mockDexieRun = jest.fn(n => n)
  const mockDexieRunVideo = jest.fn(n => n)

  beforeEach(() => {
    dex.dexieRun = mockDexieRun
    dex.dexieRunVideo = mockDexieRunVideo
  })

  it('should render successfully', () => {
    const { container } = render(<MessageComponent />, {
      initialState: {
        loader: {
          display: false
        }
      }
    })
    expect(container.querySelector('[data-testid="message"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<MessageComponent />, {
      initialState: {
        loader: {
          display: false
        }
      }
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('should call dexieRun and dexieRunVideo on clicking link', async () => {
    const blob = new Blob(['a', 'b', 'c', 'd'])
    fetchMock.once('*', { body: blob }, { sendAsJson: false })
    const { container } = render(<MessageComponent />, {
      initialState: {
        loader: {
          display: false
        }
      }
    })
    const link = container.querySelector('[data-testid="link"]')

    await waitFor(() => {
      fireEvent.click(link)
    })

    expect(mockDexieRun).toHaveBeenCalledTimes(1)
    expect(mockDexieRunVideo).toHaveBeenCalledTimes(1)
  })
})
