//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AirlineWebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BookingSchedule
    {
        public int TicketID { get; set; }
        public int CustomerID { get; set; }
        public System.DateTime BookingDate { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
    
        public virtual UserRegister UserRegister { get; set; }
    }
}