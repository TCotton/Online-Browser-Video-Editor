import React from 'react'
import { window } from 'browser-monads'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { FileConvertExport } from '../FileConvertExport'

jest.mock('@ffmpeg/ffmpeg', () => {
  return {
    createFFmpeg: () => {
      return {
        setProgress: jest.fn(),
        setLogger: jest.fn(),
        setLogging: jest.fn(),
        load: () =>
          Promise.resolve(() => {
            return true
          }),
        isLoaded: jest.fn(),
        run: jest.fn(),
        FS: jest.fn(n => n)
      }
    },
    fetchFile: () =>
      Promise.resolve(() => {
        return true
      })
  }
})

jest.mock('dexie-react-hooks', () => ({
  ...jest.requireActual('dexie-react-hooks'),
  useLiveQuery: jest.fn(n => {
    return n
  })
}))

describe('', () => {
  const windowAlert = jest.fn()
  const consoleInfo = jest.fn()
  const windowConfirm = jest.fn()
  const mockCreatObjectURL = jest.fn()
  const mockRevokeObjectURL = jest.fn()

  beforeEach(() => {
    window.alert = windowAlert
    window.console.info = consoleInfo
    window.confirm = windowConfirm
    window.URL.createObjectURL = mockCreatObjectURL
    window.URL.revokeObjectURL = mockRevokeObjectURL
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render successfully', () => {
    const { container } = render(<FileConvertExport />)
    expect(container.querySelector('[data-testid="export"]')).not.toBeNull()
  })

  it('should match snapshot', () => {
    const { baseElement } = render(<FileConvertExport />)
    expect(baseElement).toMatchSnapshot()
  })

  //TODO: Come back to this test
  xit('should call window confirm when clicking on the twitter image', async () => {
    const { container } = render(<FileConvertExport />)
    const twitter = container.querySelector('[data-testid="twitter"]')
    window.confirm = jest.fn(() => true)

    await waitFor(() => {
      fireEvent.click(twitter)
    })

    expect(window.confirm).toHaveBeenCalledTimes(1)
    expect(window.console.info).toHaveBeenCalledTimes(1)
    expect(window.URL.createObjectURL).toHaveBeenCalledTimes(1)
    expect(window.URL.revokeObjectURL).toHaveBeenCalledTimes(1)
  })
})
