import User from '../models/user.js';


// Create a new user
export const createUser = async (req, res) => {
    try {
        // Extract the necessary fields from the request body
        const { username, email, password, role, organizationName,
            organizationContact } = req.body;
        // Create a new User instance with the provided data
        const newUser = new User({
            username,
            email,
            password,
            role,
            // Only create fields related to the organization if the role is "organizer."
            organizationName: role === 'organizer' ? organizationName : undefined,
            organizationContact: role === 'organizer' ? organizationContact : undefined,
           
        });
        // Save the new user to the database
        await newUser.save();
        // Send a successful response with the created user
        res.status(201).json(newUser);
    } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({ message: error.message });
    }
};



// Retrieve a single user by ID
export const getUser = async (req, res) => {
    try {
        // Locate the user using their ID, then enter the event information in the "eventsOrganized" field.
        const user = await User.findById(req.params.id).populate('eventsOrganized');
        // If the user is not found, return a 404 response with a 'User not found' message
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // If the user is found, return a 200 response with the user data
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Retrieve a list of all users
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};



// Update an existing user by ID
export const updateUser = async (req, res) => {
    try {
        // Extract the necessary fields from the request body
        const { username, email, password, role, organizationName, organizationContact, socialMediaLinks } = req.body;
        // Find the user by ID
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Update user fields with the provided data or keep the existing values if not provided
        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        user.role = role || user.role;
        // If the role is 'organizer', update the organization-specific fields
        if (role === 'organizer') {
            user.organizationName = organizationName || user.organizationName;
            user.organizationContact = organizationContact || user.organizationContact;

        }
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
