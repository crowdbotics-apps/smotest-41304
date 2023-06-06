import axios from "axios"
const smotestAPI = axios.create({
  baseURL: "https://smotest-41304.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_froyt_list(payload) {
  return smotestAPI.get(`/api/v1/froyt/`)
}
function api_v1_froyt_create(payload) {
  return smotestAPI.post(`/api/v1/froyt/`, payload.data)
}
function api_v1_login_create(payload) {
  return smotestAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return smotestAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return smotestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return smotestAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return smotestAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return smotestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return smotestAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return smotestAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return smotestAPI.post(`/rest-auth/logout/`)
}
function api_v1_froyt_retrieve(payload) {
  return smotestAPI.get(`/api/v1/froyt/${payload.id}/`)
}
function api_v1_froyt_update(payload) {
  return smotestAPI.put(`/api/v1/froyt/${payload.id}/`, payload.data)
}
function api_v1_froyt_partial_update(payload) {
  return smotestAPI.patch(`/api/v1/froyt/${payload.id}/`, payload.data)
}
function api_v1_froyt_destroy(payload) {
  return smotestAPI.delete(`/api/v1/froyt/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return smotestAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return smotestAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return smotestAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return smotestAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return smotestAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_froyt_list,
  api_v1_froyt_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_froyt_retrieve,
  api_v1_froyt_update,
  api_v1_froyt_partial_update,
  api_v1_froyt_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
