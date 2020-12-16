using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AirlineWebAPI.Models;
using AirlineWebAPI.Controllers;
using AirlineWebAPI.Areas;

namespace AirlineWebAPI.Controllers
{
    public class RegisterUserController : ApiController
    {
        AirlineEntities3 db = new AirlineEntities3();

        public IEnumerable<UserRegister> GetUser()
        {
            return db.UserRegisters.ToList();
        }

        public UserRegister GetUserById(int id)
        {
            return db.UserRegisters.Find(id);
        }


        [Route("AddUserReg")]
        [HttpPost]
        public HttpResponseMessage AddUserReg(UserRegister model)
        {
            try
            {
                db.UserRegisters.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

        //[Route("DeleteUserReg")]
        [HttpDelete]
        public HttpResponseMessage DeleteUserReg(int id)
        {
            try
            {
                UserRegister model = db.UserRegisters.Find(id);
                if (model != null)
                {
                    db.UserRegisters.Remove(model);
                    db.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                else
                {
                    return new HttpResponseMessage(HttpStatusCode.NotFound);
                }
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

        

        

        [HttpPost]
        [Route("EditUser")]
        public object EditUser(UserRegister model)
        {
            try
            {
                var obj = db.UserRegisters.Where(x => x.UserID == model.UserID).ToList().FirstOrDefault();
                db.Entry(model).State = EntityState.Modified; 
                db.SaveChanges();
                //return new HttpResponseMessage(HttpStatusCode.OK);
                return new Response
                {
                    Status = "Updated",
                    Message = "Updated Successfully"
                };

            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
            
        }


        


        

        [Route("Login")]
        [HttpPost]
        public IHttpActionResult UserLogin(Login login)
        {
            var log = db.UserRegisters.Where(x => x.Email.Equals(login.Email) && x.Password.Equals(login.Password)).FirstOrDefault();
            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User" });

            }
            else
            {
                return Ok(new { status = 200, isSuccess = true, message = "User Login Successfull", UserDetails = log });

            }
        }
    }
}
