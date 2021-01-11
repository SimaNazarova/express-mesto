(this["webpackJsonpmesto-react"] = this["webpackJsonpmesto-react"] || []).push([
  [0],
  {
    12: function (e, t, n) {},
    13: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        s = n(1),
        o = n.n(s),
        c = n(4),
        i = n.n(c),
        r = (n(12), n(2)),
        l = n.p + "static/media/logo.a307e1c4.svg";
      var u = function () {
        return Object(a.jsx)("header", {
          className: "header",
          children: Object(a.jsx)("img", {
            className: "header__logo",
            src: l,
            alt: "\u043b\u043e\u0433\u043e\u0442\u0438\u043f",
          }),
        });
      };
      var d = function () {
          return Object(a.jsx)("footer", {
            className: "footer",
            children: Object(a.jsx)("p", {
              className: "footer__author",
              children:
                "\xa9 2020 \u0421\u0435\u0440\u0430\u0444\u0438\u043c\u0430 \u041d\u0430\u0437\u0430\u0440\u043e\u0432\u0430",
            }),
          });
        },
        p = n.p + "static/media/Vector.a086f758.svg",
        m = o.a.createContext();
      var j = function (e) {
        var t = o.a.useContext(m),
          n = e.card,
          s = n.owner._id === t._id,
          c = "element__delete-button ".concat(
            s ? "" : "element__delete-button_hidden"
          ),
          i = n.likes.some(function (e) {
            return e._id === t._id;
          }),
          r = "element__like-button ".concat(
            i ? "element__like-button_active" : ""
          );
        return Object(a.jsxs)("li", {
          className: "element",
          children: [
            Object(a.jsx)("img", {
              className: "element__image",
              src: n.link,
              onClick: function () {
                e.onCardClick(n);
              },
              alt: n.name,
            }),
            Object(a.jsx)("button", {
              className: c,
              onClick: function () {
                e.onCardDelete(n);
              },
            }),
            Object(a.jsxs)("div", {
              className: "element__image-name",
              children: [
                Object(a.jsxs)("h2", {
                  className: "element__name",
                  children: [n.name, " "],
                }),
                Object(a.jsxs)("div", {
                  children: [
                    Object(a.jsx)("button", {
                      className: r,
                      "aria-label": "\u043b\u0430\u0439\u043a",
                      onClick: function () {
                        e.onCardLike(n);
                      },
                    }),
                    Object(a.jsx)("p", {
                      className: "element__like-number",
                      children: n.likes.length,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var h = function (e) {
        var t = o.a.useContext(m);
        return Object(a.jsxs)("main", {
          children: [
            Object(a.jsxs)("section", {
              className: "profile",
              children: [
                Object(a.jsxs)("button", {
                  className: "profile__upload-button",
                  onClick: e.onEditAvatar,
                  children: [
                    Object(a.jsx)("img", {
                      className: "profile__avatar",
                      alt: "\u0430\u0432\u0430\u0442\u0430\u0440",
                      src: t.avatar,
                    }),
                    Object(a.jsx)("img", {
                      className: "profile__upload-image",
                      src: p,
                      alt:
                        "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    }),
                  ],
                }),
                Object(a.jsxs)("div", {
                  className: "profile__info",
                  children: [
                    Object(a.jsxs)("div", {
                      className: "profile__text",
                      children: [
                        Object(a.jsxs)("h1", {
                          className: "profile__name",
                          children: [" ", t.name],
                        }),
                        Object(a.jsx)("button", {
                          className: "profile__edit-button",
                          "aria-label":
                            "\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                          onClick: e.onEditProfile,
                        }),
                      ],
                    }),
                    Object(a.jsxs)("p", {
                      className: "profile__name-about",
                      children: [" ", t.about],
                    }),
                  ],
                }),
                Object(a.jsx)("button", {
                  className: "profile__add-button",
                  "aria-label":
                    "\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
                  onClick: e.onAddPlace,
                }),
              ],
            }),
            Object(a.jsx)("section", {
              className: "elements",
              children: Object(a.jsx)("ul", {
                className: "elements__table",
                children: e.cards.map(function (t) {
                  return Object(a.jsx)(
                    j,
                    {
                      card: t,
                      onCardClick: e.onCardClick,
                      onCardLike: e.onCardLike,
                      onCardDelete: e.onCardDelete,
                    },
                    t._id
                  );
                }),
              }),
            }),
          ],
        });
      };
      var b = function (e) {
        return Object(a.jsx)("section", {
          className: "popup popup_"
            .concat(e.name, " ")
            .concat(e.isOpen && "popup_opened"),
          children: Object(a.jsxs)("div", {
            className: "popup__container",
            children: [
              Object(a.jsx)("button", {
                className: "popup__close",
                "aria-label": "\u0437\u0430\u043a\u0440\u044b\u0442\u044c",
                onClick: e.onClose,
              }),
              Object(a.jsxs)("div", {
                className: "popup__content",
                children: [
                  Object(a.jsx)("h2", {
                    className: "popup__title",
                    children: e.title,
                  }),
                  Object(a.jsxs)("form", {
                    className: "popup__form",
                    name: e.formName,
                    onSubmit: e.onSubmit,
                    noValidate: !0,
                    children: [
                      e.children,
                      Object(a.jsx)("button", {
                        className: "popup__save-button",
                        type: "submit",
                        "aria-label":
                          "\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
                        onClick: e.onClose,
                        children: e.buttonName,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var f = function (e) {
        return Object(a.jsx)("section", {
          className: "popup popup_photo ".concat(e.isOpen && "popup_opened"),
          children: Object(a.jsxs)("div", {
            className: "popup__photo-container",
            children: [
              Object(a.jsx)("button", {
                className: "popup__close",
                onClick: e.onClose,
              }),
              Object(a.jsx)("img", {
                className: "popup__image",
                src: e.card.link,
                alt: e.card.name,
              }),
              Object(a.jsx)("h2", {
                className: "popup__image-name",
                children: e.card.name,
              }),
            ],
          }),
        });
      };
      var _ = function (e) {
        var t = Object(s.useState)(""),
          n = Object(r.a)(t, 2),
          c = n[0],
          i = n[1],
          l = Object(s.useState)(""),
          u = Object(r.a)(l, 2),
          d = u[0],
          p = u[1],
          j = o.a.useContext(m);
        return (
          Object(s.useEffect)(
            function () {
              i(j.name), p(j.about);
            },
            [j]
          ),
          Object(a.jsx)(b, {
            name: "popup_profile",
            title:
              "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
            isOpen: e.isOpen,
            onClose: e.onClose,
            onSubmit: function (t) {
              t.preventDefault(), e.onUpdateUser({ name: c, about: d });
            },
            buttonName:
              "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
            formName: "edit-profile-form",
            children: Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)("input", {
                  className: "popup__form-item popup__form-name",
                  id: "name-input",
                  type: "text",
                  name: "name",
                  placeholder: "\u0418\u043c\u044f",
                  minLength: "2",
                  maxLength: "40",
                  required: !0,
                  value: c || "",
                  onChange: function (e) {
                    i(e.target.value);
                  },
                }),
                Object(a.jsx)("span", {
                  className: "popup__error",
                  id: "name-input-error",
                }),
                Object(a.jsx)("input", {
                  className: "popup__form-item popup__form-job",
                  id: "job-input",
                  type: "text",
                  name: "about",
                  placeholder: "\u041e \u0441\u0435\u0431\u0435",
                  minLength: "2",
                  maxLength: "200",
                  required: !0,
                  value: d || "",
                  onChange: function (e) {
                    p(e.target.value);
                  },
                }),
                Object(a.jsx)("span", {
                  className: "popup__error",
                  id: "job-input-error",
                }),
              ],
            }),
          })
        );
      };
      var O = function (e) {
        var t = o.a.useRef();
        return Object(a.jsx)(b, {
          name: "upload-avatar",
          title:
            "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",
          buttonName: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
          formName: "add-photo-form",
          onSubmit: function (n) {
            n.preventDefault(), e.onUpdateAvatar({ avatar: t.current.value });
          },
          isOpen: e.isOpen,
          onClose: e.onClose,
          children: Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)("input", {
                className: "popup__form-item popup__form-link",
                id: "avatar-link-input",
                type: "url",
                name: "link",
                placeholder:
                  "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",
                maxLength: "200",
                required: !0,
                ref: t,
              }),
              Object(a.jsx)("span", {
                className: "popup__error",
                id: "avatar-link-input-error",
              }),
            ],
          }),
        });
      };
      var x = function (e) {
          var t = Object(s.useRef)(),
            n = Object(s.useRef)();
          return Object(a.jsx)(b, {
            name: "add-card",
            title:
              "\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",
            buttonName:
              "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
            formName: "add-card-form",
            isOpen: e.isOpen,
            onClose: e.onClose,
            onSubmit: function (a) {
              a.preventDefault(),
                e.onAddPlace({ name: t.current.value, link: n.current.value });
            },
            children: Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)("input", {
                  className: "popup__form-item popup__form-card-name",
                  id: "name-card-input",
                  type: "text",
                  name: "name",
                  placeholder:
                    "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
                  minLength: "2",
                  maxLength: "30",
                  required: !0,
                  ref: t,
                }),
                Object(a.jsx)("span", {
                  className: "popup__error",
                  id: "name-card-input-error",
                }),
                Object(a.jsx)("input", {
                  className: "popup__form-item popup__form-link",
                  id: "link-input",
                  type: "url",
                  name: "link",
                  placeholder:
                    "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",
                  maxLength: "100",
                  required: !0,
                  ref: n,
                }),
                Object(a.jsx)("span", {
                  className: "popup__error",
                  id: "link-input-error",
                }),
              ],
            }),
          });
        },
        v = n(5),
        N = n(6),
        C = new ((function () {
          function e(t) {
            var n = t.baseUrl,
              a = t.headers;
            Object(v.a)(this, e), (this._baseUrl = n), (this._headers = a);
          }
          return (
            Object(N.a)(e, [
              {
                key: "_statusJson",
                value: function (e) {
                  return e.ok
                    ? e.json()
                    : Promise.reject(
                        "\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(
                          e.status
                        )
                      );
                },
              },
              {
                key: "getUserInfo",
                value: function () {
                  return fetch(this._baseUrl + "/users/me", {
                    headers: { authorization: this._headers },
                  }).then(this._statusJson);
                },
              },
              {
                key: "getInitialCards",
                value: function () {
                  return fetch(this._baseUrl + "/cards", {
                    headers: { authorization: this._headers },
                  }).then(this._statusJson);
                },
              },
              {
                key: "editUserInfo",
                value: function (e) {
                  return fetch(this._baseUrl + "/users/me", {
                    method: "PATCH",
                    headers: {
                      authorization: this._headers,
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({ name: e.name, about: e.about }),
                  }).then(this._statusJson);
                },
              },
              {
                key: "addNewCard",
                value: function (e) {
                  return fetch(this._baseUrl + "/cards", {
                    method: "POST",
                    headers: {
                      authorization: this._headers,
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({ name: e.name, link: e.link }),
                  }).then(this._statusJson);
                },
              },
              {
                key: "putLike",
                value: function (e) {
                  return fetch(this._baseUrl + "/cards/likes/" + e, {
                    method: "PUT",
                    headers: { authorization: this._headers },
                  }).then(this._statusJson);
                },
              },
              {
                key: "deleteLike",
                value: function (e) {
                  return fetch(this._baseUrl + "/cards/likes/" + e, {
                    method: "DELETE",
                    headers: { authorization: this._headers },
                  }).then(this._statusJson);
                },
              },
              {
                key: "deleteCard",
                value: function (e) {
                  return fetch(this._baseUrl + "/cards/" + e, {
                    method: "DELETE",
                    headers: { authorization: this._headers },
                  }).then(this._statusJson);
                },
              },
              {
                key: "updateUserAvatar",
                value: function (e) {
                  return fetch(this._baseUrl + "/users/me/avatar", {
                    method: "PATCH",
                    headers: {
                      authorization: this._headers,
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({ avatar: e }),
                  }).then(this._statusJson);
                },
              },
            ]),
            e
          );
        })())({
          baseUrl: "https://mesto.nomoreparties.co/v1/cohort-17",
          headers: "7425052a-c456-4fc7-a0e3-c6a41d33ee63",
        });
      var k = function () {
          var e = Object(s.useState)({}),
            t = Object(r.a)(e, 2),
            n = t[0],
            o = t[1],
            c = Object(s.useState)([]),
            i = Object(r.a)(c, 2),
            l = i[0],
            p = i[1],
            j = Object(s.useState)(!1),
            v = Object(r.a)(j, 2),
            N = v[0],
            k = v[1],
            g = Object(s.useState)(!1),
            y = Object(r.a)(g, 2),
            U = y[0],
            L = y[1],
            S = Object(s.useState)(!1),
            P = Object(r.a)(S, 2),
            J = P[0],
            A = P[1],
            E = Object(s.useState)(!1),
            D = Object(r.a)(E, 2),
            z = D[0],
            I = D[1],
            T = Object(s.useState)({}),
            F = Object(r.a)(T, 2),
            w = F[0],
            q = F[1],
            R = function () {
              k(!1), L(!1), A(!1), q({}), I(!1);
            };
          return (
            Object(s.useEffect)(function () {
              Promise.all([C.getInitialCards(), C.getUserInfo()])
                .then(function (e) {
                  var t = Object(r.a)(e, 2),
                    n = t[0],
                    a = t[1];
                  p(n), o(a);
                })
                .catch(function (e) {
                  console.log(
                    "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                    e
                  );
                });
            }, []),
            Object(a.jsx)(m.Provider, {
              value: n,
              children: Object(a.jsx)("div", {
                className: "App",
                children: Object(a.jsxs)("div", {
                  className: "page",
                  children: [
                    Object(a.jsxs)("div", {
                      className: "content",
                      children: [
                        Object(a.jsx)(u, {}),
                        Object(a.jsx)(h, {
                          onEditProfile: function () {
                            k(!0);
                          },
                          onAddPlace: function () {
                            L(!0);
                          },
                          onEditAvatar: function () {
                            A(!0);
                          },
                          onCardClick: function (e) {
                            q(e), I(!0);
                          },
                          onCardLike: function (e) {
                            e.likes.some(function (e) {
                              return e._id === n._id;
                            })
                              ? C.deleteLike(e._id)
                                  .then(function (t) {
                                    var n = l.map(function (n) {
                                      return n._id === e._id ? t : n;
                                    });
                                    p(n);
                                  })
                                  .catch(function (e) {
                                    console.log(
                                      "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                                      e
                                    );
                                  })
                              : C.putLike(e._id)
                                  .then(function (t) {
                                    var n = l.map(function (n) {
                                      return n._id === e._id ? t : n;
                                    });
                                    p(n);
                                  })
                                  .catch(function (e) {
                                    console.log(
                                      "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                                      e
                                    );
                                  });
                          },
                          onCardDelete: function (e) {
                            C.deleteCard(e)
                              .then(function () {
                                var t = l.filter(function (t) {
                                  return t._id !== e._id;
                                });
                                p(t);
                              })
                              .catch(function (e) {
                                console.log(
                                  "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                                  e
                                );
                              });
                          },
                          cards: l,
                        }),
                        Object(a.jsx)(d, {}),
                      ],
                    }),
                    Object(a.jsx)(_, {
                      isOpen: N,
                      onClose: R,
                      onUpdateUser: function (e) {
                        C.editUserInfo(e)
                          .then(function (e) {
                            o(e);
                          })
                          .catch(function (e) {
                            console.log(
                              "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                              e
                            );
                          })
                          .finally(function () {
                            R();
                          });
                      },
                    }),
                    Object(a.jsx)(x, {
                      isOpen: U,
                      onClose: R,
                      onAddPlace: function (e) {
                        C.addNewCard(e)
                          .then(function (e) {
                            p(e);
                          })
                          .catch(function (e) {
                            console.log(
                              "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                              e
                            );
                          })
                          .finally(function () {
                            R();
                          });
                      },
                    }),
                    Object(a.jsx)(b, {
                      name: "delete-confirmation",
                      buttonName: "\u0414\u0430",
                      formName: "popup__form",
                      onClose: R,
                      children: Object(a.jsx)("h2", {
                        className: "popup__title",
                        children:
                          "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",
                      }),
                    }),
                    Object(a.jsx)(O, {
                      isOpen: J,
                      onClose: R,
                      onUpdateAvatar: function (e) {
                        C.updateUserAvatar(e)
                          .then(function (e) {
                            o(e);
                          })
                          .catch(function (e) {
                            console.log(
                              "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430:",
                              e
                            );
                          })
                          .finally(function () {
                            R();
                          });
                      },
                    }),
                    Object(a.jsx)(f, { card: w, onClose: R, isOpen: z }),
                  ],
                }),
              }),
            })
          );
        },
        g = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 14))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  s = t.getFCP,
                  o = t.getLCP,
                  c = t.getTTFB;
                n(e), a(e), s(e), o(e), c(e);
              });
        };
      i.a.render(
        Object(a.jsx)(o.a.StrictMode, { children: Object(a.jsx)(k, {}) }),
        document.getElementById("root")
      ),
        g();
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.426292c4.chunk.js.map
