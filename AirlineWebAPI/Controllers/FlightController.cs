using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AirlineWebAPI.Models;

namespace AirlineWebAPI.Controllers
{
    public class FlightController : ApiController
    {
        AirlineEntities4 db = new AirlineEntities4();

        public IEnumerable<FlightSchedule> GetFlights()
        {
            return db.FlightSchedules.ToList();
        }

        public FlightSchedule GetFlight(int id)
        {
            return db.FlightSchedules.Find(id);
        }

        [Route("AddFlight")]
        [HttpPost]
        public HttpResponseMessage AddFlight(FlightSchedule model)
        {
            try
            {
                db.FlightSchedules.Add(model);
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.Created);
            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

        
        [HttpDelete]
        public HttpResponseMessage DeleteFlight(int id)
        {
            try
            {
                FlightSchedule model = db.FlightSchedules.Find(id);
                if (model != null)
                {
                    db.FlightSchedules.Remove(model);
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
        [Route("UpdateFlight1")]
        public HttpResponseMessage UpdateFlight1(FlightSchedule model)
        {
            try
            {

                db.Entry(model).State = EntityState.Modified;
                db.SaveChanges();
                return new HttpResponseMessage(HttpStatusCode.OK);

            }
            catch (Exception ex)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }

    }
}
