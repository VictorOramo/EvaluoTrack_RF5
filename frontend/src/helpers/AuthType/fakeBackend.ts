import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import * as url from "../url_helper"

import accessToken from "../jwt-token-access/accessToken";

import {
  calenderDefaultCategories,
  events,
  defaultevent,
  messages,
  ChannelsData,
  direactContact,
  mailbox,
  listviewTable,
  subscriptionTable,
  product,
  rettingdetails,
  ordertabledata,
  customerlist,
  chooseShoppingAdd,
  sellingdata,
  category,
  gridview,
  gridviewInstructor,
  estateList,
  agentlistdata,
  earningdata,
  agencies,
  ticketList,
  invoicesList,
  instructor,
  studentsinstructor
} from "Common/data";

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "admin@themesbrand.com",
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
  mock.onPost("/post-jwt-register").reply((config: any) => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply((config: any) => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-profile").reply((config: any) => {
    const user = JSON.parse(config["data"]);

    const one = config.headers;

    let finalToken = one?.Authorization;

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            localStorage.removeItem("authUser");
            localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

            resolve([200, "Profile Updated Successfully"]);
          } else {
            reject([400, "Something wrong for edit profile"]);
          }
        } else {
          reject([400, "Invalid Token !!"]);
        }
      });
    });
  });

  mock.onPost("/jwt-forget-pwd").reply((config: any) => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPost("/social-login").reply((config: any) => {
    const user = JSON.parse(config["data"]);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...user[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onGet(url.GET_EVENTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (events) {
          // Passing fake JSON data as response
          const data = [...defaultevent];
          resolve([200, data]);
        } else {
          reject([400, "Cannot get events"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CATEGORIES).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (calenderDefaultCategories) {
          // Passing fake JSON data as response
          resolve([200, calenderDefaultCategories]);
        } else {
          reject([400, "Cannot get categories"]);
        }
      });
    });
  });

  mock.onGet(url.GET_UPCOMMINGEVENT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (defaultevent) {
          // Passing fake JSON data as response
          resolve([200, defaultevent]);
        } else {
          reject([400, "Cannot get upcomming events"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_EVENT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_EVENT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_EVENT).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          resolve([200, config.headers.event]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  // Chat
  mock.onGet(url.GET_DIRECT_CONTACT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (direactContact) {
          // Passing fake JSON data as response
          resolve([200, direactContact]);
        } else {
          reject([400, "Cannot get direct contact"]);
        }
      });
    });
  });

  mock.onGet(new RegExp(`${url.GET_MESSAGES}/*`)).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (messages) {
          // Passing fake JSON data as response
          const { params } = config;
          const filteredMessages = messages.filter(
            msg => msg.roomId === params.roomId
          );
          resolve([200, filteredMessages]);
        } else {
          reject([400, "Cannot get messages"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_MESSAGE).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config.data) {
          // Passing fake JSON data as response
          resolve([200, config.data]);
        } else {
          reject([400, "Cannot add message"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_MESSAGE).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.message]);
        } else {
          reject([400, "Cannot delete message"]);
        }
      });
    });
  });

  mock.onGet(url.GET_CHANNELS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ChannelsData) {
          // Passing fake JSON data as response
          resolve([200, ChannelsData]);
        } else {
          reject([400, "Cannot get Channels"]);
        }
      });
    });
  });

  // MailBox
  mock.onGet(url.GET_MAIL_DETAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mailbox) {
          // Passing fake JSON data as response
          resolve([200, mailbox]);
        } else {
          reject([400, "Cannot get mail details"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_MAIL).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.forId]);
        } else {
          reject([400, "Cannot delete order"]);
        }
      });
    });
  });

  // Learning > Course
  //list
  mock.onGet(url.GET_COURSE_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (listviewTable) {
          // Passing fake JSON data as response
          resolve([200, listviewTable]);
        } else {
          reject([400, "Cannot get Order Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_COURSE_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_COURSE_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_COURSE_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_COURSE_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.coursegrid]);
        } else {
          reject([400, "Cannot delete coursegrid"]);
        }
      });
    });
  });

  //grid
  mock.onGet(url.GET_COURSE_GRID_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (gridview) {
          // Passing fake JSON data as response
          resolve([200, gridview]);
        } else {
          reject([400, "Cannot get Order Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_COURSE_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_COURSE_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_COURSE_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_COURSE_GRID_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.coursegrid]);
        } else {
          reject([400, "Cannot delete coursegrid"]);
        }
      });
    });
  });

  // Learning > Course
  mock.onGet(url.GET_CATEGORY).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (category) {
          // Passing fake JSON data as response
          resolve([200, category]);
        } else {
          reject([400, "Cannot get Order Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_CATEGORY).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  // Learning > Students>
  mock.onGet(url.GET_SUBSCRIPTIONS_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (subscriptionTable) {
          // Passing fake JSON data as response
          resolve([200, subscriptionTable]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  // Learning > instructor
  //grid
  mock.onGet(url.GET_INSTRUCTOR_GRID_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (gridviewInstructor) {
          // Passing fake JSON data as response
          resolve([200, gridviewInstructor]);
        } else {
          reject([400, "Cannot get Instructor Grid Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_INSTRUCTOR_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_INSTRUCTOR_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_INSTRUCTOR_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_INSTRUCTOR_GRID_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.instructorgrid]);
        } else {
          reject([400, "Cannot delete instructorgrid"]);
        }
      });
    });
  });

  // Ecommerce > product > get
  mock.onGet(url.GET_PRODUCT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          // Passing fake JSON data as response
          resolve([200, product]);
        } else {
          reject([400, "Cannot get product Data"]);

        }
      });
    });
  });

  //product > post
  mock.onPost(url.ADD_NEW_PRODUCT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });

    });
  });
  // });

  //product > put
  mock.onPut(url.UPDATE_PRODUCT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_PRODUCT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });
  //product > delete
  mock.onDelete(url.DELETE_PRODUCT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  //product grid
  mock.onGet(url.GET_PRODUCT_GRID).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          // Passing fake JSON data as response
          resolve([200, product]);
        } else {
          reject([400, "Cannot get product grid Data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_GRID).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  //product details
  mock.onGet(url.GET_PRODUCT_DETAILS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (rettingdetails) {
          // Passing fake JSON data as response
          resolve([200, rettingdetails])
        } else {
          reject([400, "Cannot get product details Data"])
        }
      })
    })
  });

  mock.onPost(url.ADD_NEW_PRODUCT_DETAILS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add product riview event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_PRODUCT_DETAILS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_PRODUCT_DETAILS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_PRODUCT_DETAILS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  //order
  mock.onGet(url.GET_ORDER).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ordertabledata) {
          // Passing fake JSON data as response
          resolve([200, ordertabledata]);
        } else {
          reject([400, "Cannot get order Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_ORDER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_ORDER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_ORDER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_ORDER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  //customer
  mock.onGet(url.GET_CUSTOMER).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (customerlist) {
          // Passing fake JSON data as response
          resolve([200, customerlist]);
        } else {
          reject([400, "Cannot get Customer Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_CUSTOMER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_CUSTOMER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_CUSTOMER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_CUSTOMER).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  //checkout
  mock.onGet(url.GET_CHECKOUT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (chooseShoppingAdd) {
          // Passing fake JSON data as response
          resolve([200, chooseShoppingAdd]);
        } else {
          reject([400, "Cannot get Checkout Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_CHECKOUT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_CHECKOUT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_CHECKOUT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });


  mock.onDelete(url.DELETE_CHECKOUT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });

  //sellers
  mock.onGet(url.GET_SELLERTS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (sellingdata) {
          // Passing fake JSON data as response
          resolve([200, sellingdata]);
        } else {
          reject([400, "Cannot get Seller Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_NEW_SELLERTS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_SELLERTS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_SELLERTS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_SELLERTS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.headers) {
          // Passing fake JSON data as response
          resolve([200, event.headers]);
        } else {
          reject([400, "Cannot delete event"]);
        }
      });
    });
  });



  // Ecommerce > Product grid
  mock.onGet(url.GET_PRODUCT_GRID_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          // Passing fake JSON data as response
          resolve([200, product]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_PRODUCT_GRID_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.productgrid]);
        } else {
          reject([400, "Cannot delete productgrid"]);
        }
      });
    });
  });

  //Real estate 
  //list view
  mock.onGet(url.GET_REALESTATE_GRID_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (estateList) {
          // Passing fake JSON data as response
          resolve([200, estateList]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });


  mock.onPost(url.ADD_REALESTATE_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_REALESTATE_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_REALESTATE_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_REALESTATE_GRID_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.realestategrid]);
        } else {
          reject([400, "Cannot delete realestategrid"]);
        }
      });
    });
  });

  //grid view
  mock.onGet(url.GET_AGENT_GRID_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (agentlistdata) {
          // Passing fake JSON data as response
          resolve([200, agentlistdata]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_AGENT_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_AGENT_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_AGENT_GRID_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_AGENT_GRID_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.agentgrid]);
        } else {
          reject([400, "Cannot delete agentgrid"]);
        }
      });
    });
  });

  mock.onGet(url.GET_EARNING_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (earningdata) {
          // Passing fake JSON data as response
          resolve([200, earningdata]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onGet(url.GET_AGENCIES_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (agencies) {
          // Passing fake JSON data as response
          resolve([200, agencies]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_AAGENCIES_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_AAGENCIES_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_AAGENCIES_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_AGENCIES_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.agencieslist]);
        } else {
          reject([400, "Cannot delete agencieslist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_AGENT_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (agencies) {
          // Passing fake JSON data as response
          resolve([200, agencies]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_AGENT_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_AGENT_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_AGENT_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_AGENT_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.agentlist]);
        } else {
          reject([400, "Cannot delete agentlist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_REALESTATE_LISTING_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (estateList) {
          // Passing fake JSON data as response
          resolve([200, estateList]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_REALESTATE_LISTING_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_REALESTATE_LISTING_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_REALESTATE_LISTING_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_REALESTATE_LISTING_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.listinglist]);
        } else {
          reject([400, "Cannot delete agentlist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_SUPPORTTICKETS_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ticketList) {
          // Passing fake JSON data as response
          resolve([200, ticketList]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_SUPPORTTICKETS_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_SUPPORTTICKETS_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_SUPPORTTICKETS_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_SUPPORTTICKETS_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.supportticketlist]);
        } else {
          reject([400, "Cannot delete supportticketlist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_INVOICE_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (invoicesList) {
          // Passing fake JSON data as response
          resolve([200, invoicesList]);
        } else {
          reject([400, "Cannot get invoice list"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_INVOICE_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_INVOICE_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_INVOICE_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_INVOICE_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.invoicelist]);
        } else {
          reject([400, "Cannot delete invoicelist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_INSTRUCTOR_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (instructor) {
          // Passing fake JSON data as response
          resolve([200, instructor]);
        } else {
          reject([400, "Cannot get instructor"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_INSTRUCTOR_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });
  mock.onPut(url.UPDATE_INSTRUCTOR_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_INSTRUCTOR_LIST).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_INSTRUCTOR_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.instructorlist]);
        } else {
          reject([400, "Cannot delete instructorlist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_INSTRUCTOR_COURSE_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (subscriptionTable) {
          // Passing fake JSON data as response
          resolve([200, subscriptionTable]);
        } else {
          reject([400, "Cannot get subscriptionTable"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_INSTRUCTOR_COURSE_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.instructorcourselist]);
        } else {
          reject([400, "Cannot delete instructorcourselist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_INSTRUCTOR_STUDENTS_LIST).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (studentsinstructor) {
          // Passing fake JSON data as response
          resolve([200, studentsinstructor]);
        } else {
          reject([400, "Cannot get studentsinstructor"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_INSTRUCTOR_STUDENT_LIST).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.instructorstudentlist]);
        } else {
          reject([400, "Cannot delete instructorstudentlist"]);
        }
      });
    });
  });

  mock.onGet(url.GET_REALESTATE_AGENCY_OVERVIEW).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (estateList) {
          // Passing fake JSON data as response
          resolve([200, estateList]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPut(url.UPDATE_REALESTATE_AGENCY_OVERVIEW).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_REALESTATE_AGENCY_OVERVIEW).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_REALESTATE_AGENCY_OVERVIEW).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers.agencyoverview) {
          // Passing fake JSON data as response
          resolve([200, config.headers.agencyoverview]);
        } else {
          reject([400, "Cannot delete agencyoverview"]);
        }
      });
    });
  });


  mock.onGet(url.GET_REALESTATE_LIST_MAP).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (estateList) {
          // Passing fake JSON data as response
          resolve([200, estateList]);
        } else {
          reject([400, "Cannot get Subscription Data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_REALESTATE_LIST_MAP).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot add event"]);
        }
      });
    });
  });


  mock.onPut(url.UPDATE_REALESTATE_LIST_MAP).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_REALESTATE_LIST_MAP).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "Cannot update event"]);
        }
      });
    });
  });


  mock.onDelete(url.DELETE_REALESTATE_LIST_MAP).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "Cannot delete agencyoverview"]);
        }
      });
    });
  });
};



export default fakeBackend;
