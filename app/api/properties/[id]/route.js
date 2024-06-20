import connectDB from "@/config/database";
import Property from "@/app/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

//  GET /api/properties/:id

export const GET = async (request, { params }) => {
    try {
        await connectDB();

        const property = await Property.findById(params.id);

        if (!property) return new Response('Property Not Found', { status: 404 })

        return new Response(JSON.stringify(property), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response('Something Went Wrong', { status: 500 })

    }
}


//  DELETE /api/properties/:id

export const DELETE = async (request, { params }) => {
    try {
        const propertyId = params.id;
        const sessionUser = await getSessionUser();


        // Check for session
        if (!sessionUser || !sessionUser.userId) {
            return new Response('User ID is required', { status: 401 });
        }

        const { userId } = sessionUser;

        await connectDB();

        const property = await Property.findById(params.id);

        if (!property) return new Response('Property Not Found', { status: 404 })

        // Veryfy ownership 

        if (property.owner.toString() !== userId) {
            return new Response(`Unauthorized`, { staus: 401 })
        }

        await property.deleteOne();

        return new Response(`Property ${property.name} deleted`, { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response('Something Went Wrong', { status: 500 })

    }
}