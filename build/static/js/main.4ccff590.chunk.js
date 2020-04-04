(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    177: function(e, t, a) {
      e.exports = a.p + "static/media/robot.388b052a.png";
    },
    361: function(e, t, a) {
      e.exports = a(664);
    },
    366: function(e, t, a) {},
    367: function(e, t, a) {},
    626: function(e, t, a) {
      e.exports = { disabledLink: "Card_disabledLink__1CX_t" };
    },
    637: function(e, t, a) {},
    664: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        l = a.n(n),
        i = a(52),
        r = a.n(i),
        s = (a(366), a(27)),
        c = a(28),
        o = a(30),
        m = a(29),
        u = a(31),
        d = (a(367), a(26)),
        b = a(78),
        p = { message: null, messageType: null },
        E = a(32),
        g = a(25),
        h = a(130),
        f = a.n(h),
        v = (a(579), a(581), a(583), a(236));
      f.a.initializeApp({
        apiKey: "AIzaSyC6rHHcP2S1RHoKZG8dZrcFIRX_T7Q4klY",
        authDomain: "robot-friend-b4cd3.firebaseapp.com",
        databaseURL: "https://robot-friend-b4cd3.firebaseio.com",
        projectId: "robot-friend-b4cd3",
        storageBucket: "robot-friend-b4cd3.appspot.com",
        messagingSenderId: "202082833271",
        appId: "1:202082833271:web:c1402d43dbc35061"
      }),
        f.a.firestore();
      var w = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || E.c)(
          Object(g.reactReduxFirebase)(f.a, { userProfile: "users" }),
          Object(v.reduxFirestore)(f.a)
        )(E.d),
        N = Object(E.b)({
          firebase: g.firebaseReducer,
          firestore: v.firestoreReducer,
          notify: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "NOTIFY_USER":
                return Object(b.a)({}, e, {
                  message: t.message,
                  messageType: t.messageType
                });
              default:
                return e;
            }
          },
          setting: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "DISABLE_ROBOTS_ON_ADD":
                return Object(b.a)({}, e, { disableRobotsOnAdd: t.payload });
              case "DISABLE_ROBOTS_ON_EDIT":
                return Object(b.a)({}, e, { disableRobotsOnEdit: t.payload });
              case "ALLOW_REGISTRATION":
                return Object(b.a)({}, e, { allowRegistration: t.payload });
              default:
                return e;
            }
          }
        });
      if (null == localStorage.getItem("setting")) {
        localStorage.setItem(
          "setting",
          JSON.stringify({
            disableRobotsOnAdd: !0,
            disableRobotsOnEdit: !1,
            allowRegistration: !1
          })
        );
      }
      var y = w(N, { setting: JSON.parse(localStorage.getItem("setting")) }),
        O = a(692),
        _ = a(688),
        x = a(679),
        j = a(680),
        S = a(20),
        I = a(106),
        R = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(l))
              )).onSubmit = function(e) {
                var t = e,
                  n = a.props,
                  l = n.firestore,
                  i = n.history;
                l.add({ collection: "clients" }, t)
                  .then(i.push("/viewRobots"))
                  .catch(function(e) {
                    return console.log(e);
                  });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.setting.disableRobotsOnAdd;
                  return l.a.createElement(
                    O.a,
                    null,
                    l.a.createElement(
                      _.a,
                      null,
                      l.a.createElement(S.b, {
                        onSubmit: this.onSubmit,
                        initialValues: {},
                        render: function(t) {
                          var a = t.handleSubmit,
                            n = t.form,
                            i = t.submitting,
                            r = t.pristine,
                            s = t.values;
                          return l.a.createElement(
                            "form",
                            { className: "ui form", onSubmit: a },
                            l.a.createElement(
                              "div",
                              { className: "fields" },
                              l.a.createElement(
                                "div",
                                { className: "six wide field" },
                                l.a.createElement(
                                  x.a,
                                  { fluid: !0 },
                                  l.a.createElement(
                                    x.a.Header,
                                    null,
                                    l.a.createElement(
                                      "label",
                                      null,
                                      "Robot image"
                                    )
                                  ),
                                  l.a.createElement(
                                    x.a.Content,
                                    null,
                                    void 0 == s.robotId
                                      ? l.a.createElement(
                                          j.a,
                                          { fluid: !0 },
                                          " ",
                                          l.a.createElement(j.a.Image, {
                                            rectangular: !0
                                          }),
                                          " "
                                        )
                                      : l.a.createElement("img", {
                                          alt: "robots",
                                          src: "https://robohash.org/".concat(
                                            s.robotId,
                                            "?bgset=bg1&size=300x300"
                                          )
                                        })
                                  )
                                )
                              ),
                              l.a.createElement(
                                "div",
                                { className: " ten wide field" },
                                l.a.createElement("label", null, "Angriness"),
                                l.a.createElement(
                                  S.a,
                                  { name: "robotId" },
                                  function(t) {
                                    var a = t.input;
                                    t.meta;
                                    return l.a.createElement(
                                      I.Slider,
                                      Object.assign({ disabled: e }, a, {
                                        color: "red",
                                        settings: {
                                          start: 2,
                                          min: 0,
                                          max: 100,
                                          step: 1,
                                          onChange: function(e) {
                                            a.onChange(e);
                                          }
                                        }
                                      })
                                    );
                                  }
                                ),
                                l.a.createElement("label", null, "First Name"),
                                l.a.createElement(S.a, {
                                  disabled: e,
                                  name: "firstName",
                                  component: "input",
                                  type: "text",
                                  placeholder: "First Name"
                                }),
                                l.a.createElement("label", null, "Last Name"),
                                l.a.createElement(S.a, {
                                  disabled: e,
                                  name: "lastName",
                                  component: "input",
                                  type: "text",
                                  placeholder: "Last Name"
                                }),
                                l.a.createElement("label", null, "Email"),
                                l.a.createElement(S.a, {
                                  disabled: e,
                                  name: "email",
                                  component: "input",
                                  type: "text",
                                  placeholder: "Last Name"
                                })
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "field" },
                              l.a.createElement("label", null, "Notes"),
                              l.a.createElement(S.a, {
                                name: "notes",
                                component: "textarea",
                                placeholder: "Notes"
                              })
                            ),
                            l.a.createElement(
                              "div",
                              null,
                              l.a.createElement(
                                "button",
                                {
                                  className: "ui primary basic button ",
                                  type: "submit",
                                  disabled: i || r || e
                                },
                                "Submit"
                              ),
                              l.a.createElement(
                                "button",
                                {
                                  className: "ui secondary basic button",
                                  onClick: n.reset,
                                  disabled: i || r || e
                                },
                                "Reset"
                              )
                            ),
                            l.a.createElement(
                              "pre",
                              null,
                              JSON.stringify(s, 0, 2)
                            )
                          );
                        }
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        k = Object(E.c)(
          Object(g.firestoreConnect)(),
          Object(d.connect)(function(e, t) {
            return { setting: e.setting };
          })
        )(R),
        C = a(678),
        A = a(351),
        L = a(683),
        D = a(665),
        T = a(238),
        q = a(5),
        P = a.n(q),
        F =
          (a(626),
          Object(E.c)(
            Object(g.firestoreConnect)(),
            Object(d.connect)(function(e, t) {
              return { setting: e.setting };
            })
          )(function(e) {
            var t = e.robotId,
              a = e.id,
              n = e.name,
              i = e.email,
              r = e.notes,
              s = e.firestore,
              c = e.history,
              o = e.setting;
            void 0 == t && (t = a);
            return l.a.createElement(
              C.a,
              {
                closeIcon: !0,
                trigger: l.a.createElement(
                  "div",
                  {
                    className:
                      "bg-light-green dib br3 pa3 ma2 grow tc bw2 shadow-5"
                  },
                  l.a.createElement("img", {
                    alt: "robots",
                    src: "https://robohash.org/".concat(
                      t,
                      "?bgset=bg1&size=200x200"
                    )
                  }),
                  l.a.createElement(
                    "div",
                    null,
                    l.a.createElement("h2", null, n),
                    l.a.createElement("p", null, i),
                    l.a.createElement("p", null, r)
                  )
                )
              },
              l.a.createElement(C.a.Header, null, "Robot Details"),
              l.a.createElement(
                C.a.Content,
                { image: !0 },
                l.a.createElement(A.a, {
                  wrapped: !0,
                  size: "medium",
                  src: "https://robohash.org/".concat(t, "?200*200")
                }),
                l.a.createElement(
                  C.a.Description,
                  null,
                  l.a.createElement(L.a, null, n),
                  l.a.createElement(
                    "p",
                    null,
                    "We've found the following gravatar image associated with your e-mail address."
                  ),
                  l.a.createElement("p", null, "Is it okay to use this photo?"),
                  l.a.createElement("p", null, r),
                  l.a.createElement(
                    T.a,
                    {
                      className: P()("ui button  primary", {
                        disabled: o.disableRobotsOnEdit
                      }),
                      to: "/robot/edit/".concat(a)
                    },
                    " ",
                    "Edit Robot"
                  ),
                  l.a.createElement(
                    D.a,
                    {
                      onClick: function() {
                        s.delete({ collection: "clients", doc: a })
                          .then(c.push("/viewRobots"))
                          .catch(function(e) {
                            return console.log(e);
                          });
                      },
                      negative: !0,
                      disabled: o.disableRobotsOnEdit
                    },
                    " ",
                    "Delete"
                  )
                )
              )
            );
          })),
        J = a(64),
        z = a.n(J),
        B = function(e) {
          var t = e.robots,
            a = e.firestore,
            n = e.history,
            i = z.a.map(t, function(e) {
              return l.a.createElement(
                F,
                Object.assign({ history: n, firestore: a, key: e.id }, e)
              );
            });
          return l.a.createElement("div", null, i);
        },
        V = function(e) {
          e.searchfield;
          var t = e.searchChange;
          return l.a.createElement(
            "div",
            { className: "pa2 " },
            l.a.createElement("input", {
              className: "pa3 ba b--green bg-lightest-blue",
              type: "search",
              placeholder: "Search for Robot friends",
              onChange: t
            })
          );
        },
        U = function(e) {
          return l.a.createElement(
            "div",
            {
              style: {
                overflow: "scroll",
                border: "5px solid black",
                height: "800px"
              }
            },
            e.children
          );
        },
        H = a(673),
        W = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(o.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).onSearchChange = function(e) {
                a.setState({ searchfield: e.target.value });
              }),
              (a.state = { searchfield: "" }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.clients,
                    n = t.firestore,
                    i = t.history,
                    r = z.a.map(a, function(e) {
                      return Object(b.a)({ name: e.firstName + e.lastName }, e);
                    }),
                    s = z.a.filter(r, function(t) {
                      return z.a
                        .toLower(t.name)
                        .includes(z.a.toLower(e.state.searchfield));
                    });
                  return a
                    ? l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(
                          "h1",
                          { className: "f1" },
                          "Robot Friends"
                        ),
                        l.a.createElement(V, {
                          searchChange: this.onSearchChange
                        }),
                        l.a.createElement(
                          U,
                          null,
                          l.a.createElement(B, {
                            history: i,
                            firestore: n,
                            robots: s
                          })
                        )
                      )
                    : l.a.createElement(
                        H.a,
                        { active: !0, size: "large" },
                        " ",
                        l.a.createElement("h3", null, "Making robots")
                      );
                }
              }
            ]),
            t
          );
        })(n.Component),
        G = Object(E.c)(
          Object(g.firestoreConnect)([{ collection: "clients" }]),
          Object(d.connect)(function(e, t) {
            return { clients: e.firestore.ordered.clients };
          })
        )(W),
        M = a(684),
        Y = a(689),
        X = a(685),
        Q = a(349),
        K = a(691),
        Z = a(675),
        $ = a(177),
        ee = a.n($),
        te = a(686),
        ae = a(681),
        ne = a(92),
        le = (a(637), a(682)),
        ie = a(677),
        re = function(e) {
          var t = e.message,
            a = e.messageType;
          return l.a.createElement(
            "div",
            {
              className: P()("ui message", {
                positive: "success" === a,
                negative: "error" === a
              })
            },
            l.a.createElement("div", { className: "header" }, t)
          );
        },
        se = (function(e) {
          function t() {
            return (
              Object(s.a)(this, t),
              Object(o.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.setting,
                    t = e.disableRobotsOnAdd,
                    a = e.disableRobotsOnEdit,
                    n = e.allowRegistration,
                    i = this.props,
                    r = i.setDisableRobotsOnAdd,
                    s = i.setDisableRobotsOnEdit,
                    c = i.setAllowRegistration;
                  return l.a.createElement(
                    le.a,
                    {
                      textAlign: "center",
                      style: { height: "100vh" },
                      verticalAlign: "middle"
                    },
                    l.a.createElement(
                      le.a.Column,
                      { style: { maxWidth: 450 } },
                      l.a.createElement(
                        L.a,
                        { as: "h2", color: "teal", textAlign: "center" },
                        l.a.createElement(
                          T.a,
                          { to: "/viewRobots" },
                          "Back to View Robots"
                        )
                      ),
                      l.a.createElement(
                        x.a,
                        { fluid: !0 },
                        l.a.createElement(x.a.Header, null, "Edit Setting"),
                        l.a.createElement(
                          x.a.Content,
                          null,
                          l.a.createElement(
                            ie.a,
                            null,
                            l.a.createElement(ie.a.Checkbox, {
                              label: "Allow Registration",
                              checked: !!n,
                              onChange: c
                            }),
                            l.a.createElement(ie.a.Checkbox, {
                              label: "Disable add robots ",
                              checked: !!t,
                              onChange: r
                            }),
                            l.a.createElement(ie.a.Checkbox, {
                              label: "Disable edit robots",
                              checked: !!a,
                              onChange: s
                            })
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ce = Object(d.connect)(
          function(e, t) {
            return { auth: e.firebase.auth, setting: e.setting };
          },
          {
            setDisableRobotsOnAdd: function() {
              var e = JSON.parse(localStorage.getItem("setting"));
              return (
                (e.disableRobotsOnAdd = !e.disableRobotsOnAdd),
                localStorage.setItem("setting", JSON.stringify(e)),
                { type: "DISABLE_ROBOTS_ON_ADD", payload: e.disableRobotsOnAdd }
              );
            },
            setDisableRobotsOnEdit: function() {
              var e = JSON.parse(localStorage.getItem("setting"));
              return (
                (e.disableRobotsOnEdit = !e.disableRobotsOnEdit),
                localStorage.setItem("setting", JSON.stringify(e)),
                {
                  type: "DISABLE_ROBOTS_ON_EDIT",
                  payload: e.disableRobotsOnEdit
                }
              );
            },
            setAllowRegistration: function() {
              var e = JSON.parse(localStorage.getItem("setting"));
              return (
                (e.allowRegistration = !e.allowRegistration),
                localStorage.setItem("setting", JSON.stringify(e)),
                { type: "ALLOW_REGISTRATION", payload: e.allowRegistration }
              );
            }
          }
        )(se),
        oe = function(e) {
          var t = e.children,
            a = e.isLogin,
            i = e.onPusherClick,
            r = e.onToggle,
            s = e.visible,
            c = e.onLogoutClick;
          return l.a.createElement(
            te.a.Pushable,
            null,
            l.a.createElement(
              te.a,
              {
                as: ae.a,
                animation: "overlay",
                icon: "labeled",
                inverted: !0,
                direction: "right",
                vertical: !0,
                visible: s
              },
              l.a.createElement(
                ae.a.Item,
                { onClick: r, as: Z.a, to: "/home" },
                "Home"
              ),
              l.a.createElement(
                ae.a.Item,
                { onClick: r, to: "/createRobot", as: Z.a },
                "Create Robot"
              ),
              l.a.createElement(
                ae.a.Item,
                { onClick: r, as: Z.a, to: "/viewRobots" },
                "View Robots"
              ),
              a
                ? l.a.createElement(
                    n.Fragment,
                    null,
                    l.a.createElement(
                      ae.a.Item,
                      {
                        onClick: function() {
                          r();
                        },
                        to: "/setting",
                        as: Z.a
                      },
                      "Setting"
                    ),
                    l.a.createElement(
                      ae.a.Item,
                      {
                        onClick: function() {
                          c(), r();
                        },
                        to: "/home",
                        as: Z.a
                      },
                      "Log out"
                    )
                  )
                : l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      ae.a.Item,
                      { onClick: r, to: "/login", as: Z.a },
                      "Login"
                    ),
                    l.a.createElement(
                      ae.a.Item,
                      { onClick: r, to: "/signUp", as: Z.a },
                      "Sign up"
                    )
                  )
            ),
            l.a.createElement(
              te.a.Pusher,
              {
                dimmed: s,
                onClick: i,
                fixed: "top",
                style: { minHeight: "100vh" }
              },
              l.a.createElement(
                ae.a,
                { fixed: "top", inverted: !0 },
                l.a.createElement(
                  ae.a.Item,
                  null,
                  l.a.createElement(A.a, { size: "mini", src: ee.a })
                ),
                l.a.createElement(
                  ae.a.Item,
                  null,
                  l.a.createElement("h4", null, "Robot Friends")
                ),
                l.a.createElement(
                  ae.a.Item,
                  { position: "right", onClick: r },
                  l.a.createElement(ne.a, { name: "sidebar" })
                )
              ),
              t
            )
          );
        },
        me = a(676),
        ue = function(e) {
          var t = e.children;
          return l.a.createElement(me.a, { style: { marginTop: "5em" } }, t);
        },
        de = function(e) {
          var t = e.onLogoutClick,
            a = e.isLogin;
          return l.a.createElement(
            ae.a,
            { fixed: "top", inverted: !0 },
            l.a.createElement(
              ae.a.Item,
              null,
              l.a.createElement(A.a, { size: "mini", src: ee.a })
            ),
            l.a.createElement(
              ae.a.Header,
              null,
              l.a.createElement("h5", { className: "f1" }, "Robot Friends")
            ),
            l.a.createElement(
              ae.a.Menu,
              { position: "right" },
              l.a.createElement(
                Z.a,
                {
                  className:
                    "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",
                  to: "/home"
                },
                "Home"
              ),
              l.a.createElement(
                Z.a,
                {
                  className:
                    "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",
                  to: "/createRobot"
                },
                "Create Robot"
              ),
              l.a.createElement(
                Z.a,
                {
                  className:
                    "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",
                  to: "/viewRobots"
                },
                "View Robots"
              ),
              a
                ? l.a.createElement(
                    n.Fragment,
                    null,
                    l.a.createElement(
                      Z.a,
                      {
                        className:
                          "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",
                        to: "/setting"
                      },
                      "Setting"
                    ),
                    l.a.createElement(
                      Z.a,
                      {
                        className:
                          "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",
                        onClick: t,
                        to: "/home"
                      },
                      "Log out"
                    )
                  )
                : l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      Z.a,
                      {
                        className:
                          "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l",
                        to: "/login"
                      },
                      "Login"
                    ),
                    l.a.createElement(
                      Z.a,
                      {
                        className:
                          "f6 f5-l link bg-animate  hover-bg-light-green dib pa3 ph4-l ",
                        to: "/signUp"
                      },
                      "Sign up"
                    )
                  )
            )
          );
        },
        be = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(l))
              )).state = { visible: !1, isAuthenticated: !1 }),
              (a.handlePusher = function() {
                a.state.visible && a.setState({ visible: !1 });
              }),
              (a.onLogoutClick = function() {
                a.props.firebase.logout();
              }),
              (a.handleToggle = function() {
                return a.setState({ visible: !a.state.visible });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(
              t,
              [
                {
                  key: "render",
                  value: function() {
                    var e = this.props.children,
                      t = this.state,
                      a = t.visible,
                      n = t.isAuthenticated;
                    return l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        O.a,
                        O.a.onlyMobile,
                        l.a.createElement(
                          oe,
                          {
                            onPusherClick: this.handlePusher,
                            onToggle: this.handleToggle,
                            isLogin: n,
                            onLogoutClick: this.onLogoutClick,
                            visible: a
                          },
                          l.a.createElement(ue, null, e)
                        )
                      ),
                      l.a.createElement(
                        O.a,
                        { minWidth: O.a.onlyTablet.minWidth },
                        l.a.createElement(de, {
                          isLogin: n,
                          onLogoutClick: this.onLogoutClick
                        }),
                        l.a.createElement(ue, null, e)
                      )
                    );
                  }
                }
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function(e, t) {
                    return e.auth.uid
                      ? { isAuthenticated: !0 }
                      : { isAuthenticated: !1 };
                  }
                }
              ]
            ),
            t
          );
        })(n.Component),
        pe = Object(K.a)(
          Object(E.c)(
            Object(g.firebaseConnect)(),
            Object(d.connect)(function(e, t) {
              return { auth: e.firebase.auth, setting: e.setting };
            })
          )(be)
        ),
        Ee = a(18),
        ge = a.n(Ee),
        he = a(350),
        fe = a.n(he),
        ve =
          (a(647),
          a(648),
          a(649),
          (function(e) {
            function t() {
              return (
                Object(s.a)(this, t),
                Object(o.a)(this, Object(m.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(u.a)(t, e),
              Object(c.a)(t, [
                {
                  key: "render",
                  value: function() {
                    return (
                      ge()(document).ready(function() {
                        function e(e, t) {
                          ge()("#mc_submit i")
                            .removeClass(e)
                            .addClass(t);
                        }
                        ge()("header nav ul li a").click(function(e) {
                          e.preventDefault();
                          var t = ge()(this).attr("href"),
                            a = ge()(t).position();
                          a &&
                            ge()(window).scrollTo(
                              { top: a.top, left: "0px" },
                              1e3
                            );
                        }),
                          ge()(".app_link").click(function(e) {
                            e.preventDefault(),
                              ge()(window).scrollTo(
                                {
                                  top: ge()("#hero").position().top,
                                  left: "0px"
                                },
                                1e3
                              );
                          }),
                          ge()(".burger_icon").click(function() {
                            ge()("header nav").toggleClass("show"),
                              ge()("header .burger_icon").toggleClass("active");
                          }),
                          new fe.a({
                            animateClass: "animated",
                            mobile: !1,
                            offset: 50
                          }).init(),
                          console.log(ge()(".hero")),
                          ge()(".hero").parallax("50%", 0.3),
                          ge()("html").niceScroll({
                            scrollspeed: 50,
                            autohidemode: !1,
                            cursorwidth: 8,
                            cursorborderradius: 8,
                            cursorborder: "0",
                            background: "rgba(48, 48, 48, .4)",
                            cursorcolor: "#1f1f1f",
                            zindex: 999
                          }),
                          ge()("#submit_form").submit(function() {
                            ge()("#mc_submit").attr("disabled", "disabled"),
                              e("icon", "loading");
                          }),
                          ge()("#submit_form").length &&
                            ge()("#submit_form").ajaxChimp({
                              callback: function(t) {
                                "success" === t.result
                                  ? (e("loading", "icon"),
                                    ge()("#mc_submit").removeAttr(
                                      "disabled",
                                      "disabled"
                                    ),
                                    ge()("#submit_form #mc-email").val(""),
                                    ge()("#error_msg").hide(),
                                    ge()("#success_msg").show())
                                  : (e("loading", "icon"),
                                    ge()("#success_msg").hide(),
                                    ge()("#error_msg").show(),
                                    ge()("#mc_submit").removeAttr(
                                      "disabled",
                                      "disabled"
                                    ));
                              }
                            }),
                          ge()("#play_video").click(function(e) {
                            e.preventDefault();
                            var t = ge()(this).data("video");
                            (t =
                              '<iframe src="' +
                              t +
                              '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
                              ge()(".about_video")
                                .append(t)
                                .fadeIn(200);
                          }),
                          ge()(".close_video").click(function(e) {
                            e.preventDefault(),
                              ge()(".about_video").fadeOut(200, function() {
                                ge()("iframe", this).remove();
                              });
                          });
                      }),
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(
                          "section",
                          { className: "hero", id: "hero" },
                          l.a.createElement(
                            "div",
                            { className: "container" },
                            l.a.createElement(
                              "div",
                              { className: "caption" },
                              l.a.createElement(
                                "h1",
                                {
                                  className:
                                    "text-uppercase  animated wow fadeInLeft"
                                },
                                "Creators of Robofriends and SmartBrain"
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className:
                                    "enhance text-lowercase  animated wow fadeInLeft"
                                },
                                "Developers of the future, building for today"
                              ),
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/aneagoie/robofriends",
                                  className:
                                    "app_store_btn text-uppercase animated wow fadeInLeft"
                                },
                                l.a.createElement("i", {
                                  className: "android_icon"
                                }),
                                l.a.createElement("span", null, "Robofriends")
                              ),
                              l.a.createElement(
                                "a",
                                {
                                  href:
                                    "https://github.com/aneagoie/smart-brain",
                                  className:
                                    "app_store_btn text-uppercase animated wow fadeInLeft"
                                },
                                l.a.createElement("i", {
                                  className: "iphone_icon"
                                }),
                                l.a.createElement("span", null, "SmartBrain")
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "section",
                          { className: "featured_on" },
                          l.a.createElement(
                            "div",
                            { className: "container" },
                            l.a.createElement(
                              "ul",
                              {
                                className: "list-unstyled text-center clearfix"
                              },
                              l.a.createElement(
                                "li",
                                {
                                  className:
                                    "col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown"
                                },
                                l.a.createElement("img", {
                                  src: "img/google_logo.png",
                                  alt: "",
                                  title: ""
                                })
                              ),
                              l.a.createElement(
                                "li",
                                {
                                  className:
                                    "col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown",
                                  "data-wow-delay": ".2s"
                                },
                                l.a.createElement("img", {
                                  src: "img/facebook_logo.png",
                                  alt: "",
                                  title: ""
                                })
                              ),
                              l.a.createElement(
                                "li",
                                {
                                  className:
                                    "col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown",
                                  "data-wow-delay": ".3s"
                                },
                                l.a.createElement("img", {
                                  src: "img/yahoo_logo.png",
                                  alt: "",
                                  title: ""
                                })
                              ),
                              l.a.createElement(
                                "li",
                                {
                                  className:
                                    "col-xs-6 col-sm-6 col-md-3 animated wow fadeInDown",
                                  "data-wow-delay": ".4s"
                                },
                                l.a.createElement("img", {
                                  src: "img/paypal_logo.png",
                                  alt: "",
                                  title: ""
                                })
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "section",
                          { className: "about", id: "about" },
                          l.a.createElement(
                            "div",
                            { className: "container" },
                            l.a.createElement(
                              "div",
                              { className: "row" },
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-md-6 text-center animated wow fadeInLeft"
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "iphone" },
                                  l.a.createElement("img", {
                                    src: "img/iphone.png",
                                    alt: "",
                                    titl: ""
                                  })
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className: "col-md-6 animated wow fadeInRight"
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "features_list" },
                                  l.a.createElement(
                                    "h1",
                                    { className: "text-uppercase" },
                                    "The Greatest Products Ever Created"
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    "Seuismod ligula ipsum vulputate tellus quisque dictum tortor at purus faucibus tincidunt, pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
                                    " "
                                  ),
                                  l.a.createElement(
                                    "ul",
                                    { className: "list-unstyled" },
                                    l.a.createElement(
                                      "li",
                                      { className: "camera_icon" },
                                      l.a.createElement(
                                        "span",
                                        null,
                                        "Euismod ligula ipsum vulputate tellus."
                                      )
                                    ),
                                    l.a.createElement(
                                      "li",
                                      { className: "video_icon" },
                                      l.a.createElement(
                                        "span",
                                        null,
                                        "Morbi non efficitur nibh sit amet est eros."
                                      )
                                    ),
                                    l.a.createElement(
                                      "li",
                                      { className: "eye_icon" },
                                      l.a.createElement(
                                        "span",
                                        null,
                                        "Fusce faucibus ante liberonec luctus egestas."
                                      )
                                    ),
                                    l.a.createElement(
                                      "li",
                                      { className: "pic_icon" },
                                      l.a.createElement(
                                        "span",
                                        null,
                                        "Quisque pretium malesuada ornare."
                                      )
                                    ),
                                    l.a.createElement(
                                      "li",
                                      { className: "loc_icon" },
                                      l.a.createElement(
                                        "span",
                                        null,
                                        "Cras interdum vestibulum dolor."
                                      )
                                    )
                                  ),
                                  l.a.createElement(
                                    "a",
                                    {
                                      href: "#",
                                      className: "app_store_btn text-uppercase",
                                      id: "play_video",
                                      "data-video":
                                        "https://www.youtube.com/watch?v=sCX_YMPuJGA?autoplay=1&showinfo=0"
                                    },
                                    l.a.createElement("i", {
                                      className: "play_icon"
                                    }),
                                    l.a.createElement(
                                      "span",
                                      null,
                                      "About Video"
                                    )
                                  ),
                                  l.a.createElement(
                                    "a",
                                    { href: "#hero", className: "app_link" },
                                    "Get the app"
                                  )
                                )
                              )
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "about_video show_video" },
                            l.a.createElement("a", {
                              href: "",
                              className: "close_video"
                            })
                          )
                        ),
                        l.a.createElement(
                          "section",
                          { className: "app_features", id: "app_features" },
                          l.a.createElement(
                            "div",
                            { className: "container" },
                            l.a.createElement(
                              "div",
                              { className: "row text-center" },
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-sm-4 col-md-4 details animated wow fadeInDown",
                                  "data-wow-delay": "0s"
                                },
                                l.a.createElement("img", {
                                  src: "img/f_icon1.png",
                                  alt: "",
                                  title: ""
                                }),
                                l.a.createElement(
                                  "h1",
                                  { className: "text-uppercase" },
                                  "malesuada fames turpis."
                                ),
                                l.a.createElement(
                                  "p",
                                  { className: "text-lowercase" },
                                  "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-sm-4 col-md-4 details animated wow fadeInDown",
                                  "data-wow-delay": ".1s"
                                },
                                l.a.createElement("img", {
                                  src: "img/f_icon2.png",
                                  alt: "",
                                  title: ""
                                }),
                                l.a.createElement(
                                  "h1",
                                  { className: "text-uppercase" },
                                  "malesuada fames turpis."
                                ),
                                l.a.createElement(
                                  "p",
                                  { className: "text-lowercase" },
                                  "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-sm-4 col-md-4 details animated wow fadeInDown",
                                  "data-wow-delay": ".2s"
                                },
                                l.a.createElement("img", {
                                  src: "img/f_icon3.png",
                                  alt: "",
                                  title: ""
                                }),
                                l.a.createElement(
                                  "h1",
                                  { className: "text-uppercase" },
                                  "malesuada fames turpis."
                                ),
                                l.a.createElement(
                                  "p",
                                  { className: "text-lowercase" },
                                  "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."
                                )
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "row text-center" },
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-sm-4 col-md-4 details animated wow fadeInDown",
                                  "data-wow-delay": "0s"
                                },
                                l.a.createElement("img", {
                                  src: "img/f_icon4.png",
                                  alt: "",
                                  title: ""
                                }),
                                l.a.createElement(
                                  "h1",
                                  { className: "text-uppercase" },
                                  "malesuada fames turpis."
                                ),
                                l.a.createElement(
                                  "p",
                                  { className: "text-lowercase" },
                                  "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-sm-4 col-md-4 details animated wow fadeInDown",
                                  "data-wow-delay": ".1s"
                                },
                                l.a.createElement("img", {
                                  src: "img/f_icon5.png",
                                  alt: "",
                                  title: ""
                                }),
                                l.a.createElement(
                                  "h1",
                                  { className: "text-uppercase" },
                                  "malesuada fames turpis."
                                ),
                                l.a.createElement(
                                  "p",
                                  { className: "text-lowercase" },
                                  "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."
                                )
                              ),
                              l.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-sm-4 col-md-4 details animated wow fadeInDown",
                                  "data-wow-delay": ".2s"
                                },
                                l.a.createElement("img", {
                                  src: "img/f_icon6.png",
                                  alt: "",
                                  title: ""
                                }),
                                l.a.createElement(
                                  "h1",
                                  { className: "text-uppercase" },
                                  "malesuada fames turpis."
                                ),
                                l.a.createElement(
                                  "p",
                                  { className: "text-lowercase" },
                                  "vel ultrices mauris libero id diam. Vivamus tellus sagittis facilisis nisi quis mollis risus quisque ultrices elit."
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "section",
                          {
                            className: "testimonials animated wow fadeIn",
                            id: "testimonials",
                            "data-wow-duration": "2s"
                          },
                          l.a.createElement(
                            "div",
                            { className: "container" },
                            l.a.createElement(
                              "div",
                              { className: "testimonials_list" },
                              l.a.createElement(
                                "ul",
                                {
                                  className:
                                    "list-unstyled text-center slides clearfix",
                                  id: "tslider"
                                },
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "blockquote",
                                    null,
                                    l.a.createElement(
                                      "p",
                                      null,
                                      "Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."
                                    ),
                                    l.a.createElement(
                                      "span",
                                      { className: "author text-uppercase" },
                                      "John Doe"
                                    ),
                                    l.a.createElement(
                                      "span",
                                      { className: "job" },
                                      "Full Stack developer"
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "blockquote",
                                    null,
                                    l.a.createElement(
                                      "p",
                                      null,
                                      "Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."
                                    ),
                                    l.a.createElement(
                                      "span",
                                      { className: "author text-uppercase" },
                                      "Alex Fredy"
                                    ),
                                    l.a.createElement(
                                      "span",
                                      { className: "job" },
                                      "Javascript developer"
                                    )
                                  )
                                ),
                                l.a.createElement(
                                  "li",
                                  null,
                                  l.a.createElement(
                                    "blockquote",
                                    null,
                                    l.a.createElement(
                                      "p",
                                      null,
                                      "Integer pharetra tellus varius, dictum erat vel, maximus tellus. Sed vitae auctor ipsum. Aliquam luctus erat nec pulvinar vehicula donec congue tortor eget sem condimentum, ut tempor massa porttitor. Praesent tincidunt mi orci in sollicitudin mi dapibus dapibus pellentesque habitant morbi tristique senectus et malesuada fames turpis egestas."
                                    ),
                                    l.a.createElement(
                                      "span",
                                      { className: "author text-uppercase" },
                                      "Sara Aliba"
                                    ),
                                    l.a.createElement(
                                      "span",
                                      { className: "job" },
                                      "Web Designer"
                                    )
                                  )
                                )
                              ),
                              l.a.createElement(
                                "div",
                                { id: "slider_nav" },
                                l.a.createElement("div", { id: "prev_arrow" }),
                                l.a.createElement("div", { id: "next_arrow" })
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "section",
                          { className: "sub_box" },
                          l.a.createElement(
                            "p",
                            { className: "cta_text animated wow fadeInDown" },
                            "We're hiring. Join Our company!"
                          ),
                          l.a.createElement(
                            "form",
                            {
                              action: "#",
                              metohd: "post",
                              className: "animated wow fadeIn",
                              "data-wow-duration": "2s",
                              id: "submit_form"
                            },
                            l.a.createElement("input", {
                              type: "email",
                              id: "mc-email",
                              placeholder: "Enter your email"
                            }),
                            l.a.createElement(
                              "button",
                              { type: "submit", id: "mc_submit" },
                              l.a.createElement("i", { className: "icon" })
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "message", id: "error_msg" },
                            "Please Enter A Valid Email."
                          ),
                          l.a.createElement(
                            "div",
                            { className: "message", id: "success_msg" },
                            "Thank You For Your Subscription."
                          )
                        ),
                        l.a.createElement(
                          "footer",
                          null,
                          l.a.createElement(
                            "ul",
                            {
                              className:
                                "list-unstyled list-inline app_platform"
                            },
                            l.a.createElement(
                              "li",
                              {
                                className: "animated wow fadeInDown",
                                "data-wow-delay": "0s"
                              },
                              l.a.createElement(
                                "a",
                                { href: "" },
                                l.a.createElement("img", {
                                  src: "img/android_icon.png",
                                  alt: "",
                                  title: ""
                                })
                              )
                            ),
                            l.a.createElement(
                              "li",
                              {
                                className: "animated wow fadeInDown",
                                "data-wow-delay": ".1s"
                              },
                              l.a.createElement(
                                "a",
                                { href: "" },
                                l.a.createElement("img", {
                                  src: "img/ios_icon.png",
                                  alt: "",
                                  title: ""
                                })
                              )
                            ),
                            l.a.createElement(
                              "li",
                              {
                                className: "animated wow fadeInDown",
                                "data-wow-delay": ".2s"
                              },
                              l.a.createElement(
                                "a",
                                { href: "" },
                                l.a.createElement("img", {
                                  src: "img/windows_icon.png",
                                  alt: "",
                                  title: ""
                                })
                              )
                            )
                          ),
                          l.a.createElement(
                            "p",
                            {
                              className: "copyright animated wow fadeIn",
                              "data-wow-duration": "2s"
                            },
                            l.a.createElement("strong", null, "Pixelhint")
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(n.Component)),
        we = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(o.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).onSubmit = function(e) {
                var t = e,
                  n = a.props,
                  l = n.firestore,
                  i = n.client,
                  r = n.history;
                l.update({ collection: "clients", doc: i.id }, t)
                  .then(r.push("/viewRobots"))
                  .catch(function(e) {
                    return console.log(e);
                  });
              }),
              (a.state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.client;
                  return e
                    ? l.a.createElement(
                        O.a,
                        null,
                        l.a.createElement(
                          _.a,
                          null,
                          l.a.createElement(S.b, {
                            onSubmit: this.onSubmit,
                            initialValues: {
                              robotId: e.robotId,
                              firstName: e.firstName,
                              lastName: e.lastName,
                              email: e.email,
                              notes: e.notes
                            },
                            render: function(e) {
                              var t = e.handleSubmit,
                                a = e.form,
                                n = e.submitting,
                                i = e.pristine,
                                r = e.values;
                              return l.a.createElement(
                                "form",
                                { className: "ui form", onSubmit: t },
                                l.a.createElement(
                                  "div",
                                  { className: "fields" },
                                  l.a.createElement(
                                    "div",
                                    { className: "six wide field" },
                                    l.a.createElement(
                                      x.a,
                                      { fluid: !0 },
                                      l.a.createElement(
                                        x.a.Header,
                                        null,
                                        l.a.createElement(
                                          "label",
                                          null,
                                          "Robot image"
                                        )
                                      ),
                                      l.a.createElement(
                                        x.a.Content,
                                        null,
                                        void 0 == r.robotId
                                          ? l.a.createElement(
                                              j.a,
                                              { fluid: !0 },
                                              " ",
                                              l.a.createElement(j.a.Image, {
                                                rectangular: !0
                                              }),
                                              " "
                                            )
                                          : l.a.createElement("img", {
                                              alt: "robots",
                                              src: "https://robohash.org/".concat(
                                                r.robotId,
                                                "?bgset=bg1&size=300x300"
                                              )
                                            })
                                      )
                                    )
                                  ),
                                  l.a.createElement(
                                    "div",
                                    { className: " ten wide field" },
                                    l.a.createElement(
                                      "label",
                                      null,
                                      "Angriness"
                                    ),
                                    l.a.createElement(
                                      S.a,
                                      { name: "robotId" },
                                      function(e) {
                                        var t = e.input;
                                        e.meta;
                                        return l.a.createElement(
                                          I.Slider,
                                          Object.assign({}, t, {
                                            color: "red",
                                            settings: {
                                              start: 2,
                                              min: 0,
                                              max: 100,
                                              step: 1,
                                              onChange: function(e) {
                                                t.onChange(e);
                                              }
                                            }
                                          })
                                        );
                                      }
                                    ),
                                    l.a.createElement(
                                      "label",
                                      null,
                                      "First Name"
                                    ),
                                    l.a.createElement(S.a, {
                                      name: "firstName",
                                      component: "input",
                                      type: "text",
                                      placeholder: "First Name"
                                    }),
                                    l.a.createElement(
                                      "label",
                                      null,
                                      "Last Name"
                                    ),
                                    l.a.createElement(S.a, {
                                      name: "lastName",
                                      component: "input",
                                      type: "text",
                                      placeholder: "Last Name"
                                    }),
                                    l.a.createElement("label", null, "Email"),
                                    l.a.createElement(S.a, {
                                      name: "email",
                                      component: "input",
                                      type: "text",
                                      placeholder: "Last Name"
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "field" },
                                  l.a.createElement("label", null, "Notes"),
                                  l.a.createElement(S.a, {
                                    name: "notes",
                                    component: "textarea",
                                    placeholder: "Notes"
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  null,
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "ui primary basic button ",
                                      type: "submit",
                                      disabled: n || i
                                    },
                                    "Submit"
                                  ),
                                  l.a.createElement(
                                    "button",
                                    {
                                      className: "ui secondary basic button",
                                      onClick: a.reset,
                                      disabled: n || i
                                    },
                                    "Reset"
                                  )
                                ),
                                l.a.createElement(
                                  "pre",
                                  null,
                                  JSON.stringify(r, 0, 2)
                                )
                              );
                            }
                          })
                        )
                      )
                    : l.a.createElement("h1", null, "hi");
                }
              }
            ]),
            t
          );
        })(n.Component),
        Ne = Object(E.c)(
          Object(g.firestoreConnect)(function(e) {
            return [
              {
                collection: "clients",
                storeAs: "client",
                doc: e.match.params.id
              }
            ];
          }),
          Object(d.connect)(function(e, t) {
            var a = e.firestore.ordered;
            return { client: a.client && a.client[0] };
          })
        )(we),
        ye = a(674),
        Oe = function(e, t) {
          return { type: "NOTIFY_USER", messageType: t, message: e };
        },
        _e = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(l))
              )).onSubmit = function(e) {
                var t = e.email,
                  n = e.password,
                  l = a.props,
                  i = l.firebase,
                  r = l.history,
                  s = l.notifyUser;
                i.login({ email: t, password: n })
                  .then(r.push("/viewRobots"))
                  .catch(function(e) {
                    return s("Invalid Login Credentials", "error");
                  });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.notify,
                    t = e.message,
                    a = e.messageType;
                  return l.a.createElement(
                    O.a,
                    null,
                    l.a.createElement(
                      le.a,
                      {
                        textAlign: "center",
                        style: { height: "100vh" },
                        verticalAlign: "middle"
                      },
                      l.a.createElement(
                        le.a.Column,
                        { style: { maxWidth: 450 } },
                        l.a.createElement(
                          _.a,
                          { raised: !0, stacked: !0 },
                          l.a.createElement(
                            x.a,
                            { fluid: !0 },
                            l.a.createElement(A.a, {
                              alt: "robots",
                              src:
                                "https://robohash.org/1?bgset=bg1&set=set3&size=392x392",
                              wrapped: !0,
                              ui: !1
                            }),
                            l.a.createElement(
                              x.a.Content,
                              { extra: !0 },
                              l.a.createElement(S.b, {
                                onSubmit: this.onSubmit,
                                initialValues: {},
                                render: function(e) {
                                  var n = e.handleSubmit,
                                    i = (e.form, e.submitting),
                                    r = e.pristine,
                                    s = e.values;
                                  return l.a.createElement(
                                    "form",
                                    { className: P()("ui form"), onSubmit: n },
                                    l.a.createElement(
                                      "div",
                                      { className: "  field" },
                                      l.a.createElement("label", null, "Email"),
                                      l.a.createElement(
                                        S.a,
                                        {
                                          name: "email",
                                          component: "input",
                                          type: "email",
                                          placeholder: "Email"
                                        },
                                        function(e) {
                                          var t = e.input;
                                          e.meta;
                                          return l.a.createElement(
                                            ye.a,
                                            Object.assign(
                                              { type: "email" },
                                              t,
                                              {
                                                icon: "mail",
                                                iconPosition: "left",
                                                placeholder: "Email"
                                              }
                                            )
                                          );
                                        }
                                      )
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "field" },
                                      l.a.createElement(
                                        "label",
                                        null,
                                        "Passwords"
                                      ),
                                      l.a.createElement(
                                        S.a,
                                        {
                                          type: "password",
                                          name: "password",
                                          placeholder: "Password"
                                        },
                                        function(e) {
                                          var t = e.input;
                                          e.meta;
                                          return l.a.createElement(
                                            ye.a,
                                            Object.assign(
                                              { type: "password" },
                                              t,
                                              {
                                                icon: "lock",
                                                iconPosition: "left",
                                                placeholder: "Password"
                                              }
                                            )
                                          );
                                        }
                                      )
                                    ),
                                    t &&
                                      l.a.createElement(re, {
                                        message: t,
                                        messageType: a
                                      }),
                                    l.a.createElement(
                                      "button",
                                      {
                                        className: "ui primary button fluid ",
                                        type: "submit",
                                        disabled: i || r
                                      },
                                      "Login"
                                    ),
                                    l.a.createElement(
                                      "pre",
                                      null,
                                      JSON.stringify(s, 0, 2)
                                    )
                                  );
                                }
                              })
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        xe = Object(E.c)(
          Object(g.firebaseConnect)(),
          Object(d.connect)(
            function(e, t) {
              return { notify: e.notify };
            },
            { notifyUser: Oe }
          )
        )(_e),
        je = (function(e) {
          function t() {
            var e, a;
            Object(s.a)(this, t);
            for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++)
              l[i] = arguments[i];
            return (
              ((a = Object(o.a)(
                this,
                (e = Object(m.a)(t)).call.apply(e, [this].concat(l))
              )).onSubmit = function(e) {
                var t = e.email,
                  n = e.password,
                  l = a.props,
                  i = l.firebase,
                  r = (l.history, l.notifyUser);
                i.createUser({ email: t, password: n }).catch(function(e) {
                  return r("That email already exits", "error");
                });
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.notify,
                    t = e.message,
                    a = e.messageType;
                  return l.a.createElement(
                    O.a,
                    null,
                    l.a.createElement(
                      _.a,
                      null,
                      l.a.createElement(S.b, {
                        onSubmit: this.onSubmit,
                        initialValues: {},
                        render: function(e) {
                          var n = e.handleSubmit,
                            i = e.form,
                            r = e.submitting,
                            s = e.pristine,
                            c = e.values;
                          return l.a.createElement(
                            "form",
                            { className: "ui form", onSubmit: n },
                            l.a.createElement(
                              "div",
                              { className: "fields" },
                              l.a.createElement(
                                "div",
                                { className: "six wide field" },
                                l.a.createElement(
                                  x.a,
                                  { fluid: !0 },
                                  l.a.createElement(
                                    x.a.Header,
                                    null,
                                    l.a.createElement(
                                      "label",
                                      null,
                                      "Let's start! "
                                    )
                                  ),
                                  l.a.createElement(A.a, {
                                    alt: "robots",
                                    src:
                                      "https://robohash.org/2?set=set5&bgset=bg1&size=300x300",
                                    wrapped: !0,
                                    ui: !1
                                  })
                                )
                              ),
                              l.a.createElement(
                                "div",
                                { className: " ten wide field" },
                                l.a.createElement("label", null, "First Name"),
                                l.a.createElement(S.a, {
                                  name: "firstName",
                                  component: "input",
                                  type: "text",
                                  placeholder: "First Name"
                                }),
                                l.a.createElement("label", null, "Last Name"),
                                l.a.createElement(S.a, {
                                  name: "lastName",
                                  component: "input",
                                  type: "text",
                                  placeholder: "Last Name"
                                }),
                                l.a.createElement("label", null, "Email"),
                                l.a.createElement(S.a, {
                                  name: "email",
                                  component: "input",
                                  type: "email",
                                  placeholder: "Email"
                                })
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "field" },
                              l.a.createElement("label", null, "Password"),
                              l.a.createElement(S.a, {
                                name: "password",
                                type: "password",
                                component: "input",
                                placeholder: "Password"
                              })
                            ),
                            t &&
                              l.a.createElement(re, {
                                message: t,
                                messageType: a
                              }),
                            l.a.createElement(
                              "div",
                              null,
                              l.a.createElement(
                                "button",
                                {
                                  className: "ui primary basic button ",
                                  type: "submit",
                                  disabled: r || s
                                },
                                "Submit"
                              ),
                              l.a.createElement(
                                "button",
                                {
                                  className: "ui secondary basic button",
                                  onClick: i.reset,
                                  disabled: r || s
                                },
                                "Reset"
                              )
                            ),
                            l.a.createElement(
                              "pre",
                              null,
                              JSON.stringify(c, 0, 2)
                            )
                          );
                        }
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Se = Object(E.c)(
          Object(g.firebaseConnect)(),
          Object(d.connect)(
            function(e, t) {
              return { notify: e.notify };
            },
            { notifyUser: Oe }
          )
        )(je),
        Ie = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(o.a)(this, Object(m.a)(t).call(this, e))).state = {
                hasError: !1
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "componentDidCatch",
                value: function(e, t) {
                  this.setState({ hasError: !0 });
                }
              },
              {
                key: "render",
                value: function() {
                  return this.state.hasError
                    ? l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(
                          "h1",
                          null,
                          "Ooooops. That is not good "
                        ),
                        l.a.createElement("img", {
                          src:
                            "https://robohash.org/1?set=set5&bgset=bg1&size=300x300",
                          alt: "I am sorry"
                        }),
                        l.a.createElement(
                          "p",
                          null,
                          "Let me get back to you soon"
                        )
                      )
                    : this.props.children;
                }
              }
            ]),
            t
          );
        })(n.Component),
        Re = a(234),
        ke = a.n(Re),
        Ce = a(240),
        Ae = ke()({}),
        Le = Object(Ce.connectedRouterRedirect)({
          wrapperDisplayName: "UserIsAuthenticated",
          AuthenticatingComponent: H.a,
          allowRedirectBack: !0,
          redirectPath: function(e, t) {
            return Ae.getRedirectQueryParam(t) || "/login";
          },
          authenticatingSelector: function(e) {
            var t = e.firebase,
              a = t.auth,
              n = (t.profile, t.isInitializing);
            return !a.isLoaded || !0 === n;
          },
          authenticatedSelector: function(e) {
            var t = e.firebase.auth;
            return t.isLoaded && !t.isEmpty;
          }
        }),
        De = Object(Ce.connectedRouterRedirect)({
          wrapperDisplayName: "UserIsNotAuthenticated",
          AuthenticatingComponent: H.a,
          allowRedirectBack: !1,
          redirectPath: function(e, t) {
            return Ae.getRedirectQueryParam(t) || "/";
          },
          authenticatingSelector: function(e) {
            var t = e.firebase,
              a = t.auth,
              n = t.isInitializing;
            return !a.isLoaded || !0 === n;
          },
          authenticatedSelector: function(e) {
            var t = e.firebase.auth;
            return t.isLoaded && t.isEmpty;
          }
        }),
        Te = (function(e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(o.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).state = {}),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(c.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    d.Provider,
                    { store: y },
                    l.a.createElement(
                      M.a,
                      null,
                      l.a.createElement(
                        "div",
                        { className: "tc" },
                        l.a.createElement(
                          pe,
                          null,
                          l.a.createElement(
                            Ie,
                            null,
                            l.a.createElement(
                              Y.a,
                              null,
                              l.a.createElement(X.a, {
                                exact: !0,
                                from: "/",
                                to: "/home"
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/home",
                                component: ve
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/createRobot",
                                component: Le(k)
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/viewRobots",
                                component: Le(G)
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/robot/edit/:id",
                                component: Le(Ne)
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/login",
                                component: De(xe)
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/signUp",
                                component: De(Se)
                              }),
                              l.a.createElement(Q.a, {
                                exact: !0,
                                path: "/setting",
                                component: ce
                              })
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(663);
      r.a.render(l.a.createElement(Te, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[361, 1, 2]]
]);
//# sourceMappingURL=main.4ccff590.chunk.js.map