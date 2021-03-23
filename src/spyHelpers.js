export const fetchResponseOk = body =>
    Promise.resolve({
        ok: true,
        status: 200,
        response: () => Promise.resolve(body)
    });

export const fetchResponseError = (status = 500, body = {}) =>
    Promise.resolve({
        ok: false,
        status,
        json: () => Promise.resolve(body)
    });