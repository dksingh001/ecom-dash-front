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
        // console.log("POST Request Body:", body); // Ensure this contains { productId: ... }

    // let headers = { 
    //   "Content-Type": "application/json"
    //  };
    
    // if (authflag) {
    //   const tokenData = localStorage.getItem("ecomtoken");
    //   let token;

    //   // Safely parse JSON
    //   if (tokenData) {
    //     try {
    //       token = JSON.parse(tokenData)?.token;
    //     } catch (e) {
    //       console.error("Invalid JSON format in localStorage for ecomtoken", e);
    //     }
    //   }

    //   if (token) headers["Authorization "] = `Bearer ${token}`;
    // }
    
    // if (authflag) {
    //   headers["jwt"] = JSON.parse(
    //     localStorage.getItem("ecomtoken")
    //   ).token;
    // }

     // Include the Authorization header if authFlag is true
    //  if (authflag) {
    //   const token = JSON.parse(localStorage.getItem("ecomtoken"))?.token;
    //   if (token) {
    //     headers["Authorization"] = `Bearer ${token}`;
    //   } else {
    //     throw new Error("Token is missing. Please log in again.");
    //   }
    // }
    
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    // Check for HTTP errors
    if (!response.ok) {
            const errorData = await response.json(); // Try to parse error details
            throw new Error(`Error: ${response.status} - ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const post = async (url, body, authFlag) => {
//   try {
//     // Set up headers
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     // Include the Authorization header if authFlag is true
//     if (authFlag) {
//       const token = JSON.parse(localStorage.getItem("ecomtoken"))?.token;
//       if (token) {
//         headers["Authorization"] = `Bearer ${token}`;
//       } else {
//         console.error("Token is missing from localStorage.");
//         throw new Error("Token is missing. Please log in again.");
//       }
//     }

//     // Make the POST request
//     const response = await fetch(url, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     });

//     // Check for HTTP errors
//     if (!response.ok) {
//       const errorData = await response.json(); // Try to parse error details
//       throw new Error(`Error: ${response.status} - ${errorData.message || response.statusText}`);
//     }

//     // Parse and return the response data
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("An error occurred:", error.message); // Log a more descriptive error message
//     throw error; // Re-throw the error for further handling
//   }
// };

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
