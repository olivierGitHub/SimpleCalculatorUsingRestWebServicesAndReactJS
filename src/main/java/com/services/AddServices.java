package com.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * Created by olivier on 15/11/15.
 */
@Path("/operation")
public class AddServices {

    @GET
    @Path("/add")
    @Produces(MediaType.TEXT_HTML)
    public String doOperationService(@QueryParam("exp1") int exp1, @QueryParam("exp2") int exp2){
        int res = exp1 + exp2;
        return "<h1>" + res + "</h1>";
    }


}
