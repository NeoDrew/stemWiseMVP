import { act, renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import useAuthorisedApi from './useAuthorisedApi';

const SUCCESS_URL = 'http://test.com/things';
const ERROR_URL = 'http://error.com/things';
const ERROR_MESSAGE = 'Error fetching request';
const MOCK_RESPONSE = [
  {
    id: 0,
    name: 'Red',
  },
  {
    id: 1,
    name: 'Orange',
  },
  {
    id: 2,
    name: 'Yellow',
  },
  {
    id: 3,
    name: 'Green',
  },
  {
    id: 4,
    name: 'Turquoise',
  },
  {
    id: 5,
    name: 'Blue',
  },
  {
    id: 6,
    name: 'Purple',
  },
  {
    id: 7,
    name: 'Pink',
  },
];

const server = setupServer(
  rest.get(SUCCESS_URL, (req, res, ctx) => {
    return res(ctx.json(MOCK_RESPONSE));
  }),
  rest.get(ERROR_URL, (req, res) => {
    return res.networkError(ERROR_MESSAGE);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useAuthorisedApi', () => {
  test('returns data from defined URL', async () => {
    const request = new Request(SUCCESS_URL);
    const { result } = renderHook(() => useAuthorisedApi(request, true));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toStrictEqual(MOCK_RESPONSE);
    expect(result.current.error).toBeNull();
  });

  test('returns execute when shouldTriggerImmediately is false and returns data after calling execute()', async () => {
    const request = new Request(SUCCESS_URL);
    const { result } = renderHook(() => useAuthorisedApi(request, false));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
    expect(typeof result.current.execute).toBe('function');

    await act(result.current.execute);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toStrictEqual(MOCK_RESPONSE);
    expect(result.current.error).toBeNull();
  });

  test('returns error when request throws an error', async () => {
    const request = new Request(ERROR_URL);
    const { result } = renderHook(() => useAuthorisedApi(request, true));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeTruthy();
  });
});
