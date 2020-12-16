using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AirlineWebAPI.Models;
using System.Data.Entity;

namespace AirlineWebAPI.Controllers
{
    public class BookingController : ApiController
    {
        AirlineEntities5 db = new AirlineEntities5();

        public IEnumerable<BookingSchedule> GetBooking()
        {
            return db.BookingSchedules.ToList();
        }

        public BookingSchedule GetBooking(int id)
        {
            return db.BookingSchedules.Find(id);
        }
        
        
        


        [HttpPost]
        public HttpResponseMessage AddBooking(BookingSchedule model)
        {
            try
            {
                db.BookingSchedules.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }


        [HttpDelete]
        public HttpResponseMessage DeleteBooking(int id)
        {
            try
            {
                BookingSchedule model = db.BookingSchedules.Find(id);
                if (model != null)
                {
                    db.BookingSchedules.Remove(model);
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

        [HttpPut]
        public HttpResponseMessage UpdateBooking(int id, BookingSchedule model)
        {
            try
            {
                if (id == model.TicketID)
                {
                    db.Entry(model).State = EntityState.Modified;
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
    }
}
