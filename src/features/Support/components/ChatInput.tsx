import {
  CircleStop,
  Image,
  Mic,
  Phone,
  Play,
  Send,
  StopCircle,
  X,
} from "lucide-react";
import IconButton from "../../../SharedComponents/IconButton";
import { ChangeEvent, type FC, useRef, useState } from "react";

type ChatInputType = {
  handleSubmit: () => void;
  setImageSources: (imageSources: File) => void;
  setAudioSource: (audioBlob: Blob) => void;
  setMessage: (message: string) => void;
  message: string | null;
};

const ChatInput: FC<ChatInputType> = ({
  setImageSources,
  handleSubmit,
  setAudioSource,
  setMessage,
  message,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const [audioBlob, setAudioBlob] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Ref for the audio element

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImageSources(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      // reset audio
      setAudioBlob(null);
      setAudioSource(null);
      setIsPlaying(false);
      setAudioProgress(0);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Audio recording and playback
  const handleMicClick = async () => {
    if (isRecording) {
      if (mediaRecorder) {
        mediaRecorder.stop();
        setIsRecording(false);
      }
    } else {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          // reset images first
          setSelectedImage(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });

          const recorder = new MediaRecorder(stream);
          const chunks: Blob[] = [];

          recorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) {
              chunks.push(e.data);
            }
          };

          recorder.onstop = () => {
            if (chunks.length > 0) {
              const audioBlob = new Blob(chunks, { type: "audio/webm" });
              const audioUrl = URL.createObjectURL(audioBlob);
              setAudioBlob(audioUrl);
              setAudioSource(audioBlob);
            }
          };

          recorder.start();
          setMediaRecorder(recorder);
          setIsRecording(true);
        } catch (err) {
          console.error("Error accessing audio stream:", err);
        }
      } else {
        console.error("Audio recording is not supported.");
      }
    }
  };

  const handleAudioPlayback = () => {
    if (audioBlob && !isPlaying) {
      const audio = new Audio(audioBlob); // Use the stored URL instead of creating a new one
      audioRef.current = audio; // Store the audio reference

      audio.play();
      setIsPlaying(true);

      // Smooth progress bar update
      const updateProgress = () => {
        if (audioRef.current && !audioRef.current.ended) {
          const progress =
            (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setAudioProgress(progress); // Update the state with the calculated progress

          // Keep updating the progress
          requestAnimationFrame(updateProgress);
        } else {
          // If the audio ended, reset the state
          setIsPlaying(false);
          setAudioProgress(0);
        }
      };

      // Trigger the progress update loop
      requestAnimationFrame(updateProgress);

      // Listen to the 'ended' event to reset when audio finishes
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setAudioProgress(0); // Reset progress when audio ends
      });
    }
  };

  const handleStopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setAudioProgress(0);
    }
  };

  const clearAudio = () => {
    setAudioBlob(null);
    setAudioSource(null);
    setIsPlaying(false);
    setAudioProgress(0);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value); // Update the message state via props
  };

  return (
    <div className="w-full flex justify-between items-center h-[10%] px-4 bg-[#f7f7f7] relative">
      <div className="flex items-center w-[85%] gap-3">
        <button onClick={handleImageClick}>
          <Image color="gray" />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <button onClick={handleMicClick}>
          {isRecording ? <StopCircle color="red" /> : <Mic color="gray" />}
        </button>

        <input
          type="text"
          className="w-[80%] border border-gray-300 rounded-md px-2 h-[40px] outline-none"
          placeholder="Type your message here..!"
          onChange={handleInputChange}
          value={message}
        />
      </div>
      <div className="flex items-center w-[22%] gap-2">
        <IconButton
          isDisplayBordered={false}
          bgColor="#3b82f6"
          title="Send"
          onClick={handleSubmit}
          textColor="#fff"
        >
          <Send color="#fff" />
        </IconButton>
        <IconButton
          isDisplayBordered={false}
          bgColor="#22c55e"
          title="Call"
          onClick={() => {}}
          textColor="#fff"
        >
          <Phone color="#fff" />
        </IconButton>
      </div>

      {selectedImage && (
        <div className="w-full h-[300px] flex justify-center items-center absolute bottom-16 left-0 right-0 bg-gray-100 ">
          <div className="w-[50%] h-[250px] flex items-start">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-[97%] h-[250px] object-cover rounded-md shadow-md"
            />
            <button onClick={clearImage} className=" bg-red-300">
              <X />
            </button>
          </div>
        </div>
      )}

      {audioBlob && (
        <div className="w-full h-[300px] flex flex-col justify-center items-center absolute bottom-16 left-0 right-0 bg-gray-100">
          {/* <h3 className="mb-4">Recorded Audio:</h3> */}

          <div className="flex gap-2 items-start">
            <button
              onClick={isPlaying ? handleStopPlayback : handleAudioPlayback}
              className="bg-blue-500 text-white p-2 rounded-lg mb-4"
            >
              {isPlaying ? <CircleStop size={30} /> : <Play size={30} />}
            </button>
            <button
              onClick={clearAudio}
              className=" bg-red-300 rounded-full p-1"
            >
              <X size={15} />
            </button>
            {/* Progress bar */}
            {/* <div className="relative h-[20px] w-[200px] bg-gray-300 rounded-md overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 transition-all ease-linear"
                style={{ width: `${audioProgress}%` }}
              />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
