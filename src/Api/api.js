export const get = async (url, authflag) => {
  try {
    let headers = {};
    headers["Content-Type"] = "application/json";

    if (authflag) {
      const token = JSON.parse(localStorage.getItem("ecomtoken"))?.token;
      if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    // if (authflag) {
    //   headers["jwt"] = JSON.parse(localStorage.getItem("ecomtoken"));
    // }
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const post = async (url, body, authflag) => {
  try {
    let headers = {};
    headers["Content-Type"] = "application/json";

    if (authflag) {
      const token = JSON.parse(localStorage.getItem("ecomtoken"))?.token;
      if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    // if (authflag) {
    //   headers["jwt"] = JSON.parse(
    //     localStorage.getItem("ecomtoken")
    //   ).token;
    // }
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const put = async (url, body, authflag) => {
  try {
    let headers = {};
    headers["Content-Type"] = "application/json";

    if (authflag) {
      const token = JSON.parse(localStorage.getItem("ecomtoken"))?.token;
      if (token) headers["Authorization"] = `Bearer ${token}`;
    }



    // if (authflag) {
    //   headers["jwt"] = JSON.parse(
    //     localStorage.getItem("ecomtoken")
    //   ).token;
    // }

    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletereq = async (url, authflag) => {
  try {
    let headers = {};
    headers["Content-Type"] = "application/json";

    if (authflag) {
      const token = JSON.parse(localStorage.getItem("ecomtoken"))?.token;
      if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    // if (authflag) {
    //   headers["jwt"] = JSON.parse(
    //     localStorage.getItem("ecomtoken")
    //   ).token;
    // }
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
