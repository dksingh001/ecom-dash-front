export const get = async (url, authflag) => {
  try {
    let headers = {};
    headers["content-type"] = "application/json";
    if (authflag) {
      headers["jwt"] = JSON.parse(localStorage.getItem("ecomfront_token"));
    }
    const response = await fetch(url, {
      method: "GET",
      headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const post = async (url, body, authflag) => {
  try {
    let headers = {};
    headers["content-type"] = "application/json";
    if (authflag) {
      headers["jwt"] = JSON.parse(
        localStorage.getItem("ecomfront_token")
      ).token;
    }
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const put = async (url, body, authflag) => {
  try {
    let headers = {};
    headers["content-type"] = "application/json";
    if (authflag) {
      headers["jwt"] = JSON.parse(
        localStorage.getItem("ecomfront_token")
      ).token;
    }
    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletereq = async (url, authflag) => {
  try {
    let headers = {};
    headers["content-type"] = "application/json";
    if (authflag) {
      headers["jwt"] = JSON.parse(
        localStorage.getItem("ecomfront_token")
      ).token;
    }
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
