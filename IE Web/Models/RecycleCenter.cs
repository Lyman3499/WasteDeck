//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IE_Web.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class RecycleCenter
    {
        public int id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string address { get; set; }
        public string suburb { get; set; }
        public decimal postcode { get; set; }
        public Nullable<decimal> longitude { get; set; }
        public Nullable<decimal> latitude { get; set; }
    }
}
