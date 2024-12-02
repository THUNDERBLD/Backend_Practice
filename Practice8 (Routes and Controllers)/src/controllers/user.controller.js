import asyncHandler from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"
import {User} from "../models/User.model.js"
import {UploadOnCloudinary} from "../utils/Cloudinary.js"
import ApiResponse from "../utils/ApiResponse.js"

const registerUser = asyncHandler( async (req, res) => {
    // Take data from request body (get the user details from frontend )
    // validation - not empty
    // check if user already exists -> email, username
    // check for avata
    // upload avatar to clodinary
    // create user object -> create entry in database
    // remove password and refresh token feild from response 
    // check for user creation
    // return response

    const { username, email, password } = req.body;               // req.body is an object, possibly from a server response containing properties like username, email and password.
                                                                 // The { username, email, password } syntax pulls these specific properties out of req.body and assigns them directly to new variables with the same names.
                                                                // Now, username, email and password are individual constants containing the values from req.body.


    if(    // some is the method on array on which we can check any condition on each element of the array and according to the codition it will return true or false.
        [username, email, password].some((feild) => feild?.trim() === "")  // In the some() method this statement(feild?.trim() === "") means if feild is present then trim it then check if it is equals to "" => output will be boolean
    ){
        throw new ApiError(400, "All feilds are required")
    }
    // checking weather is user is existing or not
    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })
    if(existedUser){
        throw new ApiError(409, "User with same Username or Email, already exists")
    }

    // uploading the avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(400, "Please upload an Avatar");
    }
    const avatar = await UploadOnCloudinary(avatarLocalPath);
    if(!avatar){
        throw new ApiError(400, "Avatar is required");
    }

    // creating the user on database
    const user = await User.create({
        username: username.toLowerCase(),
        avatar: avatar.url,
        email: email,
        password: password,
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    } else {
        console.log("The User is Created with the username :",user.username);
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})

export default registerUser;