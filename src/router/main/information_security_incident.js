export default [
  {
    path: "/information_security_incident",
    name: "Information Security Incident",
    component: () => import("@/views/information_security_incident/index.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/information_security_incident/inform",
    name: "Information Security Incident Inform",
    component: () =>
      import("@/views/information_security_incident/AnalyzeIncident.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/information_security_incident/assign/:id/:process_id",
    name: "Assign Operator",
    component: () =>
      import("@/views/information_security_incident/AssignOperator.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/information_security_incident/solving/:id/:process_id",
    name: "Solve Problem",
    component: () =>
      import("@/views/information_security_incident/SolveProblem.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/information_security_incident/summary/:id/:process_id",
    name: "Summary",
    component: () =>
      import("@/views/information_security_incident/Summary.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/information_security_incident/review/:id/:process_id",
    name: "Review",
    component: () => import("@/views/information_security_incident/Review.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/information_security_incident/report/:id/:process_id",
    name: "Information Security Report",
    component: () => import("@/views/information_security_incident/Report.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
