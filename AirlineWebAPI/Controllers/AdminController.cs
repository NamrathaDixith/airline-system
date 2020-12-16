using AirlineWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AirlineWebAPI.Controllers
{
    public class AdminController : ApiController
    {

        AirlineEntities9 db = new AirlineEntities9();

        [Route("AdminLogin")]
        [HttpPost]
        public Response ALogin(Login alogin)
        {
            var log = db.AdminLogins.Where(x => x.Username.Equals(alogin.Email) && x.Password.Equals(alogin.Password)).FirstOrDefault();
            if (log == null)
            {
                return new Response { Status = "Invalid", Message = "Invalid User." };
            }
            else
                return new Response { Status = "Success", Message = "Login Successfull" };
        }

        

        public object GetLastBooking()
        {
            var obj = db.BookingSchedules.ToList().LastOrDefault();
            return obj;
        }
    }
}
