import { AxiosError } from "axios";
import React, { FC, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { selectConversationById } from "../../store/conversationSlice";
import { selectGroupById } from "../../store/groupSlice";
import { removeAllAttachments } from "../../store/message-panel/messagePanelSlice";
import { addSystemMessage, clearAllMessages } from "../../store/system-messages/systemMessagesSlice";
import { createMessage } from "../../utils/api";
import { AuthContext } from "../../utils/context/AuthContext";
import { getRecipientFromConversation } from "../../utils/helpers";
import { useToast } from "../../utils/hooks/useToast";
import {
    MessagePanelBody,
    MessagePanelFooter,
    MessagePanelStyle,
    MessageTypingStatus,
} from '../../utils/styles';
import { MessageAttachmentContainer } from "./attachments/MessageAttachmentContainer";
import { MessageContainer } from "./MessageContainer";
