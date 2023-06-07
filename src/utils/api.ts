import axios, { AxiosRequestConfig } from 'axios';
import {
    AcceptFriendRequestResponse,
    AddGroupRecipientParams,
    CancelFriendRequestResponse,
    Conversation,
    ConversationType,
    CreateConversationParams,
    CreateGroupParams,
    CreateMessageParams,
    CreateUserParams,
    DeleteGroupMessageParams,
    DeleteGroupMessageResponse,
    DeleteMessageParams,
    DeleteMessageResponse,
    EditMessagePayload,
    FetchGroupMessagePayload,
    FetchMessagePayload,
    Friend,
    FriendRequest,
    Group,
    GroupMessageType,
    MessageType,
    RemoveGroupRecipientParams,
    UpdateGroupDetailsPayload,
    UpdateGroupOwnerParams,
    UpdateStatusParams,
    User,
    UserCredentialsParams,
} from './types';

const API_URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

