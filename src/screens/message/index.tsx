import { useState, useEffect, useRef } from "react";
import "./style.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BABYSITTER_INFO } from "../../constants/babysitter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CallIcon from "@mui/icons-material/Call";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";

// Define message interface
interface Message {
  id: string;
  from: "You" | string;
  message: string;
  timestamp: string;
  attachment?: {
    name: string;
    type: string;
    data: string; // Base64 encoded file data
  };
}

const MessageComponent = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { babysitterIndex } = useParams();
  const [previousPath, setPreviousPath] = useState("/");

  const formatDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    const displayHours = hours % 12 || 12;
    return `Today ${displayHours}:${minutes} ${ampm}`;
  };

  const selectedBabysitter = BABYSITTER_INFO.find(
    (babysitter) => babysitter.id === babysitterIndex
  );
  const getStorageKey = () => `messages_${babysitterIndex}`;
  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    const prevPath = location.state?.from || `/review/${babysitterIndex}`;
    setPreviousPath(prevPath);

    const storedMessages = localStorage.getItem(getStorageKey());
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else if (selectedBabysitter?.messages) {
      setMessages(
        selectedBabysitter.messages.map((msg, index) => ({
          ...msg,
          id: `init-${index}`,
          timestamp: formatDate(),
        }))
      );
    }
  }, [location, babysitterIndex, selectedBabysitter]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0)
      localStorage.setItem(getStorageKey(), JSON.stringify(messages));
  }, [messages, babysitterIndex]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0)
      setSelectedFile(e.target.files[0]);
  };

  // Convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSendMessage = async () => {
    if ((!newMessage.trim() && !selectedFile) || !selectedBabysitter) return;
    const currentTime = formatDate();
    let attachment = undefined;
    if (selectedFile) {
      try {
        const base64Data = await fileToBase64(selectedFile);
        attachment = {
          name: selectedFile.name,
          type: selectedFile.type,
          data: base64Data,
        };
      } catch (error) {
        console.error("Error processing file:", error);
      }
    }
    const newMessageObj: Message = {
      id: `msg-${Date.now()}`,
      from: "You",
      message: newMessage.trim(),
      timestamp: currentTime,
      attachment,
    };
    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
    setNewMessage("");
    setSelectedFile(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBackBtnClick = () => navigate(previousPath);
  const triggerFileInput = () => fileInputRef.current?.click();
  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="message-container">
      {/* Header */}
      <div className="message-header">
        <button className="back-button" onClick={handleBackBtnClick}>
          <ChevronLeftIcon className="icon" />
        </button>
        <div className="header-title">
          {selectedBabysitter?.fullName || "Carolyn Becker"}
        </div>
        <button className="call-button">
          <CallIcon className="icon" />
        </button>
      </div>

      {/* Timestamp */}
      <div className="timestamp">{formatDate()}</div>

      {/* Messages */}
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div
            key={msg.id || index}
            className={`message-wrapper ${
              msg.from === "You" ? "sent" : "received"
            }`}
          >
            <div
              className={`message ${msg.from === "You" ? "sent" : "received"}`}
            >
              {msg.message}

              {msg.attachment && (
                <div className="attachment">
                  {msg.attachment.type.startsWith("image/") ? (
                    <img
                      src={msg.attachment.data}
                      alt={msg.attachment.name}
                      className="attachment-image"
                    />
                  ) : (
                    <div className="file-attachment">
                      <AttachFileIcon className="file-icon" />
                      <span className="file-name">{msg.attachment.name}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* File attachment preview */}
      {selectedFile && (
        <div className="file-preview">
          <span className="file-name">{selectedFile.name}</span>
          <button className="remove-file" onClick={removeSelectedFile}>
            <CloseIcon className="icon small" />
          </button>
        </div>
      )}

      {/* Message Input */}
      <div className="message-input">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
        <AddOutlinedIcon className="add-button" onClick={triggerFileInput} />
        <input
          type="text"
          placeholder="Type Message..."
          className="input-field"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <ArrowUpwardIcon className="send-button" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default MessageComponent;
