﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class WasteDeckdatabaseEntities3 : DbContext
    {
        public WasteDeckdatabaseEntities3()
            : base("name=WasteDeckdatabaseEntities3")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<quiz> quizs { get; set; }
        public virtual DbSet<RecycleCenter> RecycleCenters { get; set; }
        public virtual DbSet<Vendor> Vendors { get; set; }
    }
}
